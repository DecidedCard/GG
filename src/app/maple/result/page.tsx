"use client";

import React from "react";

import { useSearchParams } from "next/navigation";

const Result = () => {
  const params = useSearchParams();
  const characterName = params.get("character_name") as string;
  console.log(characterName);

  return <div>Result</div>;
};

export default Result;
