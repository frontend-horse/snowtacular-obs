import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_SECRET_KEY;

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
