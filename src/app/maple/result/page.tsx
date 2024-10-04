"use client";

import React from "react";

import useResult from "@/hooks/maple/result/useResult";

const Result = () => {
  const { characterName } = useResult();

  return <div>Result</div>;
};

export default Result;
