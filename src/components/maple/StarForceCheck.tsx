import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";

import starForceArr from "@/util/maple/starForceArr";

const StarForceCheck = ({ star }: { star: number }) => {
  const starArr = starForceArr(25).map((item, idx) => {
    if (idx + 1 <= star) {
      return 1;
    }
    return item;
  });

  return (
    star && (
      <div className="flex flex-col justify-center items-center gap-1  w-full text-yellow-300">
        <div className="flex gap-1">
          <span className="flex">
            {starArr.slice(0, 5).map((item, idx) => {
              if (item) {
                return <MdOutlineStar key={idx} />;
              } else {
                return <MdOutlineStarBorder key={idx} />;
              }
            })}
          </span>
          <span className="flex">
            {starArr.slice(5, 10).map((item, idx) => {
              if (item) {
                return <MdOutlineStar key={idx} />;
              } else {
                return <MdOutlineStarBorder key={idx} />;
              }
            })}
          </span>
          <span className="flex">
            {starArr.slice(10, 15).map((item, idx) => {
              if (item) {
                return <MdOutlineStar key={idx} />;
              } else {
                return <MdOutlineStarBorder key={idx} />;
              }
            })}
          </span>
        </div>
        <div className="flex gap-1">
          <span className="flex">
            {starArr.slice(15, 20).map((item, idx) => {
              if (item) {
                return <MdOutlineStar key={idx} />;
              } else {
                return <MdOutlineStarBorder key={idx} />;
              }
            })}
          </span>
          <span className="flex">
            {starArr.slice(20, 25).map((item, idx) => {
              if (item) {
                return <MdOutlineStar key={idx} />;
              } else {
                return <MdOutlineStarBorder key={idx} />;
              }
            })}
          </span>
        </div>
      </div>
    )
  );
};

export default StarForceCheck;
