"use client";

import React, { Suspense } from "react";

import { Spinner } from "@nextui-org/spinner";

import SkillInfo from "@/components/maple/result/skill/SkillInfo";

const SkillPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <SkillInfo />
    </Suspense>
  );
};

export default SkillPage;
