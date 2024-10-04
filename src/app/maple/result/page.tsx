"use client";

import React from "react";

import BasicInfo from "@/components/maple/result/BasicInfo";

import useResult from "@/hooks/maple/result/useResult";

const Result = () => {
  const { query } = useResult();

  if (query.isLoading) {
    return <div>로딩 중....</div>;
  }

  if (query.isError) {
    return <div>에러!</div>;
  }

  return (
    query.data && (
      <div className="p-4">
        <BasicInfo info={query.data.basicInfo} />
      </div>
    )
  );
};

export default Result;
