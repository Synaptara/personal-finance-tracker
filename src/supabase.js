import { createClient } from '@supabase/supabase-js'

// Replace these with your actual Supabase URL and Anon Key
const supabaseUrl = 'https://hankoujtpnqtycmutdfu.supabase.co';
const supabaseKey = 'sb_publishable_yvaGEa0DBvEeG3EpEszJOQ_sMZH89oV';

export const supabase = createClient(supabaseUrl, supabaseKey);
