"use client";

import React, { Suspense } from "react";

import SkillInfo from "@/components/maple/result/skill/SkillInfo";
import LoadingOverlay from "@/components/common/LoadingOverlay";

const SkillPage = () => {
  return (
    <Suspense fallback={<LoadingOverlay />}>
      <SkillInfo />
    </Suspense>
  );
};

export default SkillPage;
