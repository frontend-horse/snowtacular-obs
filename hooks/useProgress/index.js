import { useSupabaseDonations } from "../useSupabaseDonations";

const GOAL = 10_000;
const NUM_SPONSORS = 5;
const SPONSOR_MATCH = 1_000;
const TOTAL_SPONSOR_MATCH = NUM_SPONSORS * SPONSOR_MATCH;

/**
 * Calculates the amount donated and matched so far, and determines the percentage towards the goal.
 * @returns {{
 *   goal: number,
 *   percent: number,
 *   total: number
 * }}
 */
function useProgress() {
  /** @type {{data: TeamSeasDonation[]}} */
  const { data } = useSupabaseDonations();

  if (!data?.length) {
    return {
      goal: GOAL,
      percent: 0,
      total: 0,
    };
  }

  const amountDonatedByViewers = data.reduce((totalDonated, viewerDonation) => {
    return totalDonated + viewerDonation.donation;
  }, 0);

  const amountMatchedBySponsors = Math.min(
    amountDonatedByViewers,
    TOTAL_SPONSOR_MATCH
  );
  const totalAmountDonated = amountDonatedByViewers + amountMatchedBySponsors;

  const percentOfGoal = totalAmountDonated / GOAL;

  return {
    percent: Math.min(percentOfGoal, 1),
    total: totalAmountDonated,
    goal: GOAL,
  };
}

export default useProgress;

/**
 * @typedef {object} TeamSeasDonation
 * @property {number} id
 * @property {string} color
 * @property {number} created_at
 * @property {string} display_name
 * @property {number} donation
 * @property {number} ff
 * @property {string} flair
 * @property {string} is_gift
 * @property {string} message_public
 * @property {'Frontend Horse'} team_name
 */
