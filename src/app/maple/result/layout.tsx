"use client";

import React, { Suspense } from "react";

import { Spinner } from "@nextui-org/spinner";

import CharacterInfo from "@/components/maple/result/characterInfo/CharacterInfo";

const ResultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<Spinner className="w-full min-h-screen" />}>
      <CharacterInfo>{children}</CharacterInfo>
    </Suspense>
  );
};

export default ResultLayout;
