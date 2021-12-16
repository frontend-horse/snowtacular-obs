import axios from "axios";
import { useQuery } from "react-query";

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

const DUMMY_DONATIONS = [];

setTimeout(function addDummyDonation() {
	let now = Date.now();
	DUMMY_DONATIONS.push({
		id: now,
		created_at: now,
		display_name: "Ben Myers",
		team_name: "Frontend Horse",
		message_public: Math.random() > 0.5 ?
			'Lorem ipsum dolor sit amet' :
			'',
		donation: 3,
		color: 'FFB72B',
		flair: 'feed-icon-1.png',
		ff: 0,
		is_gift: '0'
	});

	let nextTimeout = Math.floor(Math.random() * 20000) + 5000;
	setTimeout(addDummyDonation, nextTimeout);
}, Math.floor(Math.random() * 20000) + 5000);

// export const useSupabaseDonations = () => {
//   return useQuery("supabaseDonations", fetchSupabaseDonations, {
//     refetchInterval: 15000,
//   });
// };
export const useSupabaseDonations = () => {
  const query = useQuery("supabaseDonations", fetchSupabaseDonations, {
    refetchInterval: 15000,
  });

  query.data = [...query.data, ...DUMMY_DONATIONS]

  return query;
};

