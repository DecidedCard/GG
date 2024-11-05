import React, { Suspense } from "react";

import { Spinner } from "@nextui-org/spinner";

import CharacterInfo from "@/components/maple/result/ChatacterInfo";

const page = () => {
  return (
    <Suspense fallback={<Spinner className="w-full min-h-screen" />}>
      <CharacterInfo />
    </Suspense>
  );
};

export default page;
