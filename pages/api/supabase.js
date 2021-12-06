import { supabaseClient } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  result = await supabase.from("team_seas").select();

  res.status(200).json({ result });
}
