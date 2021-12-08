import axios from "axios";

// export const getTeamSeasDonations = async () => {
//   const apiUrl = "https://lbsearch.tsinfra.net/v1";
//   const options = {
//     search_terms: "Frontend Horse",
//     search_mode: 0,
//     sort: "team_name",
//   };

//   const data = axios
//     .post(apiUrl, options)
//     .then(function (response) {
//       console.log(response);
//       return response;
//     })
//     .catch(function (error) {
//       console.log(error);
//       return error;
//     });

//   return data;
// };

export const getSupaBaseDonations = async () => {
  const { data, error } = await supabase.from("cities").select();
};
