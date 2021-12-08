import { useQuery } from "react-query";

import axios from "axios";

export const fetchSupabaseDonations = async () => {
  const apiUrl = "/api/supabase-donations";

  const data = await axios
    .get(apiUrl)
    .then(function (response) {
      return response.data?.result?.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });

  return data;
};

export const useSupabaseDonations = () => {
  return useQuery("supabaseDonations", fetchSupabaseDonations, {
    refetchInterval: 15000,
  });
};
