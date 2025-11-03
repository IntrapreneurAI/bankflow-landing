import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Client = {
  id?: string;
  name: string;
  email: string;
  company?: string;
  note?: string;
  enriched_data?: Record<string, any>;
  created_at?: string;
};
