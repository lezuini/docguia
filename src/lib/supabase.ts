import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.URL_SUPABASE!;
const supabaseKey = process.env.CLAVE_PUBLICA_SUPABASE!;

export const supabase = createClient(supabaseUrl, supabaseKey);
