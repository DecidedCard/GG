"use client";

import React, { Suspense } from "react";

import UnionInfo from "@/components/maple/result/union/UnionInfo";
import LoadingOverlay from "@/components/common/LoadingOverlay";

const UnionPage = () => {
  return (
    <Suspense fallback={<LoadingOverlay />}>
      <UnionInfo />
    </Suspense>
  );
};

export default UnionPage;
