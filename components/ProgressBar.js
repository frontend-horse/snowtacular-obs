import React, { useMemo } from "react";
import { useSupabaseDonations } from "../hooks/useSupabaseDonations";

export default function ProgressBar() {
  const { status, data, error, isFetching } = useSupabaseDonations();

  return <div></div>;
}
