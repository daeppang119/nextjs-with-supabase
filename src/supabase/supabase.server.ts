import { createClient } from "@supabase/supabase-js";

export const supabaseForServer = createClient(
  "https://ihdmqlsgpmdcrlvtyydz.supabase.co",
  process.env.SUPABASE_SERVER_SIDE_API_KEY as string
);
