"use client";

import React, { Suspense } from "react";

import UnionInfo from "@/components/maple/result/characterInfo/union/UnionInfo";

import { Spinner } from "@nextui-org/spinner";

const UnionPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <UnionInfo />
    </Suspense>
  );
};

export default UnionPage;
