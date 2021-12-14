import axios from "axios";

import { useTeamSeasDonations } from "../hooks/useTeamSeasDonations";
import { useSupabaseDonations } from "../hooks/useSupabaseDonations";

// This page is only added to one OBS scene and doesn't render anything

const postToSupabase = async (donation) => {
  const postData = await axios.post("/api/supabase-donations", donation);
  return postData;
};

export default function TeamseasFetch() {
  // Fetch TeamSeas data

  const { data: teamSeasData, isFetching } = useTeamSeasDonations();

  // Fetch Supabase data
  const { data: supabaseData } = useSupabaseDonations();

  if (teamSeasData && supabaseData && !isFetching) {
    teamSeasData.forEach((teamSeasDonation) => {
      // Check if teamseas donation is in supabaseData
      const supabaseDonation = supabaseData.find(
        (supabaseDonation) => supabaseDonation.id === teamSeasDonation.id
      );
      // If any donation is not in SupaBase
      if (!supabaseDonation) {
        // Update donation in supabase
        postToSupabase(teamSeasDonation);
      }
    });
  }
  return null;
}
