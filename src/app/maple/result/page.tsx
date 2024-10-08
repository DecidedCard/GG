import React, { Suspense } from "react";

import CharacterInfo from "@/components/maple/result/ChatacterInfo";

const page = () => {
  return (
    <Suspense>
      <CharacterInfo />
    </Suspense>
  );
};

export default page;
