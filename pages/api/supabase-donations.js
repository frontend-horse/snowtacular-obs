import { supabaseClient } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  console.log(
    "🚀 ~ file: supabase-donations.js ~ line 4 ~ handler ~ req",
    req.method
  );
  console.log("YE");
  if (req.method === "POST") {
    // Process a POST request
    // Write to Supabase
    res.status(200).json({ result: "Yeah" });
  } else {
    // Handle any other HTTP method
    // Get the supabase donations
    const result = await supabaseClient.from("team_seas").select();
    res.status(200).json({ result });
  }
}
