import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://sgxnsndzqmtjuwsangda.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNneG5zbmR6cW10anV3c2FuZ2RhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5ODYzMDEsImV4cCI6MjAyMTU2MjMwMX0.luk4ZnFbMJgKL7Iw4nae_qkb17a1Kn55b9vwWLmcT_E"
);

export default supabase;
