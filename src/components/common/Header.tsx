import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="p-4 w-full border-b border-solid border-black">
      <Link href={"/"}>
        <p className="text-title/32px">Game-Information</p>
      </Link>
    </header>
  );
};

export default Header;
