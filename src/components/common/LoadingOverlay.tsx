import React from "react";

import { Spinner } from "@nextui-org/spinner";

const LoadingOverlay = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Spinner />
    </div>
  );
};

export default LoadingOverlay;
