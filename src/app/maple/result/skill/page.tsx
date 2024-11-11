"use client";

import React, { Suspense } from "react";

import SkillInfo from "@/components/maple/result/skill/SkillInfo";

import { Spinner } from "@nextui-org/spinner";

const SkillPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <SkillInfo />
    </Suspense>
  );
};

export default SkillPage;
