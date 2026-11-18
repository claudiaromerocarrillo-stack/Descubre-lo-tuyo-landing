import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://akglopciozvsyrikytwc.supabase.co';
const supabaseAnonKey = 'sb_publishable_kA401AXWSf1TF1GoA4VUWA_WvSb366Y';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
