import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://akglopciozvsyrikytwc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrZ2xvcGNpb3p2c3lyaWt5dHdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQyODQ3ODUsImV4cCI6MjEwOTg2MDc4NX0.u8P7KMwdGgNXMGGZ4AQX94IMLNBkukaHnwIYhxgfjv4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
