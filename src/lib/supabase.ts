import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://akglopciozvsynoikytwc.supabase.co';
const supabaseAnonKey = 'sb_publishable_KaMO1AxWsF1TFiGoA4VuwA_Vv5b366Y';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
