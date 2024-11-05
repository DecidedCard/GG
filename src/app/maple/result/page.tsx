import React, { Suspense } from "react";

import { Spinner } from "@nextui-org/react";

import CharacterInfo from "@/components/maple/result/ChatacterInfo";

const page = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <CharacterInfo />
    </Suspense>
  );
};

export default page;
