import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://asacyixmpmprdqtvbvpw.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzYWN5aXhtcG1wcmRxdHZidnB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxNDEyNzYsImV4cCI6MjA3NzcxNzI3Nn0.Y-LzT7j6YXxqgVDyxjOyUKpQyEX7nNS3mcDDas2Ni6k';

const supabase = createClient(supabaseUrl, supabaseKey);

console.log('Testing Supabase connection...');
console.log('URL:', supabaseUrl);

// Insert test lead
const { data, error } = await supabase
  .from('clients')
  .insert({
    name: 'Test Lead',
    email: 'test@example.com',
    company: 'Test Bank',
    note: 'Title: CRO - This is a test submission from the contact form'
  })
  .select();

if (error) {
  console.error('❌ Error inserting test lead:', error);
  process.exit(1);
} else {
  console.log('✅ Test lead inserted successfully!');
  console.log('Data:', JSON.stringify(data, null, 2));
}

// Fetch all leads to verify
const { data: allLeads, error: fetchError } = await supabase
  .from('clients')
  .select('*')
  .order('created_at', { ascending: false })
  .limit(5);

if (fetchError) {
  console.error('❌ Error fetching leads:', fetchError);
} else {
  console.log('\n📊 Recent leads in database:');
  console.log(JSON.stringify(allLeads, null, 2));
}
