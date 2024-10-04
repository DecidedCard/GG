"use client";

import React from "react";

import useResult from "@/hooks/maple/result/useResult";

const Result = () => {
  const { query } = useResult();

  if (query.isLoading) {
    return <div>로딩 중....</div>;
  }

  if (query.isError) {
    return <div>에러!</div>;
  }

  return <div>Result</div>;
};

export default Result;
