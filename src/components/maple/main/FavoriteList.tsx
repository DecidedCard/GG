"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const FavoriteList = () => {
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    const item = localStorage.getItem("favorite");

    if (item) {
      setList(JSON.parse(item));
    }
  }, []);

  return (
    list.length !== 0 && (
      <section className="flex flex-wrap gap-5 mx-auto mb-10 p-4 w-[700px] md:w-[550px] sm:w-[350px]">
        {list.map((item) => (
          <Link
            key={item}
            href={`/maple/result?character_name=${item}&type=stat`}
          >
            <ol className="py-2 w-36 border-2 border-solid border-primary-200 text-center rounded-lg">
              {item}
            </ol>
          </Link>
        ))}
      </section>
    )
  );
};

export default FavoriteList;
