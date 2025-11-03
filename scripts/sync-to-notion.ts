/**
 * BankFlow CRM Sync Agent
 * 
 * Syncs new leads from Supabase to Notion CRM database
 * Run this script periodically (e.g., every 5 minutes via cron)
 */

import { createClient } from '@supabase/supabase-js';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

// Supabase configuration
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

// Notion configuration
const NOTION_DATA_SOURCE_ID = 'collection://20dc4f70-2004-44a7-bf05-2733a4e7f7af';

interface Client {
  id: string;
  name: string;
  email: string;
  company?: string;
  note?: string;
  created_at: string;
}

/**
 * Fetch new leads from Supabase that haven't been synced to Notion yet
 */
async function fetchNewLeads(): Promise<Client[]> {
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .is('enriched_data->notion_synced', null)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching leads from Supabase:', error);
    return [];
  }

  return data || [];
}

/**
 * Create a lead in Notion CRM database
 */
async function createNotionLead(client: Client): Promise<boolean> {
  try {
    const properties = {
      "Name": client.name,
      "Email": client.email,
      "Company": client.company || '',
      "Notes": client.note || '',
      "Status": "New",
      "Source": "Website",
      "Assigned To": "Unassigned",
      "date:Created:start": client.created_at.split('T')[0],
      "date:Created:is_datetime": 0,
      "Supabase ID": client.id
    };

    const input = JSON.stringify({
      parent: {
        data_source_id: NOTION_DATA_SOURCE_ID
      },
      pages: [{
        properties: properties
      }]
    });

    const { stdout, stderr } = await execAsync(
      `manus-mcp-cli tool call notion-create-pages --server notion --input '${input.replace(/'/g, "'\\''")}'`
    );

    if (stderr && !stderr.includes('Tool execution result')) {
      console.error('Error creating Notion page:', stderr);
      return false;
    }

    console.log(`✅ Created Notion lead for: ${client.name} (${client.email})`);
    return true;

  } catch (error) {
    console.error('Error creating Notion lead:', error);
    return false;
  }
}

/**
 * Mark lead as synced in Supabase
 */
async function markAsSynced(clientId: string): Promise<void> {
  const { error } = await supabase
    .from('clients')
    .update({
      enriched_data: {
        notion_synced: true,
        notion_synced_at: new Date().toISOString()
      }
    })
    .eq('id', clientId);

  if (error) {
    console.error('Error marking lead as synced:', error);
  }
}

/**
 * Main sync function
 */
async function syncLeads() {
  console.log('🔄 Starting BankFlow CRM sync...');
  
  const newLeads = await fetchNewLeads();
  
  if (newLeads.length === 0) {
    console.log('✅ No new leads to sync');
    return;
  }

  console.log(`📋 Found ${newLeads.length} new lead(s) to sync`);

  for (const lead of newLeads) {
    const success = await createNotionLead(lead);
    
    if (success) {
      await markAsSynced(lead.id);
    }
    
    // Rate limit: wait 1 second between API calls
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log('✅ Sync complete!');
}

// Run sync
syncLeads().catch(console.error);
