import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rhogkehlmmougikfapbv.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJob2drZWhsbW1vdWdpa2ZhcGJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2NTgzNDksImV4cCI6MjAyMzIzNDM0OX0.wIaiHSqv4eMKkAa8Ii2tRAH4G60jwck6G2SF3iL7ZXw`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
