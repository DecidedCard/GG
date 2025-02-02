"use client";

import React, { Suspense } from "react";

import LoadingOverlay from "@/components/common/LoadingOverlay";
import CharacterInfo from "@/components/maple/result/CharacterInfo";

const Result = () => {
  return (
    <Suspense fallback={<LoadingOverlay />}>
      <CharacterInfo />
    </Suspense>
  );
};

export default Result;
