import { supabaseClient } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Write to Supabase
    const { data, error } = await supabaseClient
      .from("team_seas")
      .upsert(req.body);

    if (error) {
      console.log("Error", error);
      res.status(500).json({ error });
    } else {
      console.log("Data", data);
      res.status(200).json({ data });
    }
  } else if (req.method === "GET") {
    // Handle any other HTTP method
    // Get the supabase donations
    const result = await supabaseClient.from("team_seas").select();
    res.status(200).json({ result });
  }
}
