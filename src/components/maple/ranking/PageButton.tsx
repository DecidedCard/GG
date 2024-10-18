"use client";

import React from "react";
import { useRouter } from "next/navigation";

const PageButton = ({ length, page }: { length: number; page: number }) => {
  const router = useRouter();

  const totalPages = length / 20;
  const currentPage = page;

  // 페이지 이동 함수
  const handlePageChange = (page: number) => {
    router.push(`/maple/ranking/total/${page}`);
  };

  return (
    <div className="flex justify-center gap-4 mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`w-14 h-10 text-text-100 rounded ${
            currentPage == index + 1 ? "bg-primary-100" : "bg-bg-200"
          }`}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default PageButton;
