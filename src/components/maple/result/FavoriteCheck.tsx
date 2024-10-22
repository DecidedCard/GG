"use client";

import React, { useEffect, useState } from "react";

import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";

const FavoriteCheck = ({ character }: { character: string }) => {
  const [characterName, setCharacterName] = useState<string[]>([]);
  const characterCheck = characterName.find((i) => i === character);

  useEffect(() => {
    const item = localStorage.getItem("favorite");

    if (item) {
      setCharacterName(JSON.parse(item));
    }
  }, []);

  const onClickAddFavorite = () => {
    const check = [...characterName, character];
    setCharacterName(check);
    localStorage.setItem(
      "favorite",
      JSON.stringify([...characterName, character])
    );
  };

  const onClickDeleteFavorite = () => {
    const index = characterName.indexOf(character);

    const check = [...characterName];
    check.splice(index, 1);

    setCharacterName(check);
    localStorage.setItem("favorite", JSON.stringify(check));
  };

  return characterCheck ? (
    <MdOutlineStar
      onClick={onClickDeleteFavorite}
      className="absolute top-4 right-4 z-10 w-10 h-10 text-primary-100 cursor-pointer sm:w-8 sm:h-8"
    />
  ) : (
    <MdOutlineStarBorder
      onClick={onClickAddFavorite}
      className="absolute top-4 right-4 z-10 w-10 h-10 text-primary-100 cursor-pointer sm:w-8 sm:h-8"
    />
  );
};

export default FavoriteCheck;
