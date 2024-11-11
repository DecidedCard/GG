"use client";

import React, { Suspense } from "react";

import CharacterInfo from "@/components/maple/result/CharacterInfo";
import LoadingOverlay from "@/components/common/LoadingOverlay";

const ResultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<LoadingOverlay />}>
      <CharacterInfo>{children}</CharacterInfo>
    </Suspense>
  );
};

export default ResultLayout;
