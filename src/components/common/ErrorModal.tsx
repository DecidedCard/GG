"use client";

import React from "react";

import useErrorModalStore from "@/store/errorModalStore";

const ErrorModal = ({ children }: { children: React.ReactNode }) => {
  const { errObj } = useErrorModalStore();

  return (
    <div>
      {children}
      {errObj.isError && (
        <div className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black bg-opacity-80">
          <div className="flex flex-col gap-14 max-w-[400px] bg-bg-100 p-10 rounded-lg text-body/26px text-text-100">
            <p>{errObj.comment}</p>
            <button
              onClick={errObj.onClickFn}
              className="mx-auto p-4 w-full bg-primary-100 rounded-md"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorModal;
