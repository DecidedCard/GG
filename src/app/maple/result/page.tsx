"use client";

import React, { Suspense } from "react";

import CharacterInfo from "@/components/maple/result/CharacterInfo";

const Result = () => {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <CharacterInfo />
    </Suspense>
  );
};

export default Result;
