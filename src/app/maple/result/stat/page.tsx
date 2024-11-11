"use client";

import React, { Suspense } from "react";

import StatAndItemInfo from "@/components/maple/result/stat&item/StatAndItemInfo";

import { Spinner } from "@nextui-org/spinner";

const StatPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <StatAndItemInfo />
    </Suspense>
  );
};

export default StatPage;
