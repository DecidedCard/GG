import React from "react";

import OverallRankinList from "@/components/maple/main/OverallRankinList";
import RebootOverallRankingList from "@/components/maple/main/RebootOverallRankingList";

const Maple = () => {
  return (
    <div className="grid grid-cols-2 gap-5 p-4">
      <OverallRankinList />
      <RebootOverallRankingList />
    </div>
  );
};

export default Maple;
