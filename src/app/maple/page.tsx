import React from "react";

import { overallRanking } from "@/api/maple";

const Maple = async () => {
  const res = await overallRanking();
  console.log(res);
  return <div>Maple</div>;
};

export default Maple;
