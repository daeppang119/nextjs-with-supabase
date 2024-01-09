import { createClient } from "@supabase/supabase-js";

export const supabaseForClient = createClient(
  "https://ihdmqlsgpmdcrlvtyydz.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_CLIENT_SIDE_API_KEY as string
);
