"use client";

import React, { Suspense } from "react";

import StatAndItemInfo from "@/components/maple/result/stat&item/StatAndItemInfo";
import LoadingOverlay from "@/components/common/LoadingOverlay";

const StatPage = () => {
  return (
    <Suspense fallback={<LoadingOverlay />}>
      <StatAndItemInfo />
    </Suspense>
  );
};

export default StatPage;
