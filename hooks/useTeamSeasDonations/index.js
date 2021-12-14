import { useQuery } from "react-query";

import axios from "axios";

export const fetchTeamSeasDonations = async () => {
  const apiUrl = "https://lbsearch.tsinfra.net/v1";
  const options = {
    search_terms: "Frontend Horse",
    search_mode: 0,
    sort: "team_name",
  };

  const data = axios
    .post(apiUrl, options)
    .then(function (response) {
      console.log(
        "🚀 ~ file: index.js ~ line 16 ~ response",
        response.data.records
      );

      return response.data?.records;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });

  return data;
};

export const useTeamSeasDonations = () => {
  return useQuery("teamSeasDonations", fetchTeamSeasDonations, {
    refetchInterval: 15000,
    refetchIntervalInBackground: true,
  });
};
