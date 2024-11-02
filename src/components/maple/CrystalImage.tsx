import React from "react";

import Image, { type StaticImageData } from "next/image";

import 주황버섯 from "@/../public/assets/maple/crystalImage/crystalMushroom.webp";
import 슬라임 from "@/../public/assets/maple/crystalImage/crystalSlime.webp";
import 뿔버섯 from "@/../public/assets/maple/crystalImage/crystalMushroom2.webp";
import 스텀프 from "@/../public/assets/maple/crystalImage/crystalStump.webp";
import 스톤골렘 from "@/../public/assets/maple/crystalImage/crystalStone.webp";
import 발록 from "@/../public/assets/maple/crystalImage/crystalBalock.webp";
import 자쿰 from "@/../public/assets/maple/crystalImage/crystalZacum.webp";
import 핑크빈 from "@/../public/assets/maple/crystalImage/crystalBin.webp";
import 파풀라투스 from "@/../public/assets/maple/crystalImage/crystalClock.webp";

import type { Crystal } from "@/types/maple/union";

const CrystalImage = ({ item }: { item: Crystal }) => {
  const image = ((item === "크리스탈 : 주황버섯" && 주황버섯) ||
    (item === "크리스탈 : 슬라임" && 슬라임) ||
    (item === "크리스탈 : 뿔버섯" && 뿔버섯) ||
    (item === "크리스탈 : 스텀프" && 스텀프) ||
    (item === "크리스탈 : 스톤골렘" && 스톤골렘) ||
    (item === "크리스탈 : 발록" && 발록) ||
    (item === "크리스탈 : 자쿰" && 자쿰) ||
    (item === "크리스탈 : 핑크빈" && 핑크빈) ||
    (item === "크리스탈 : 파풀라투스" && 파풀라투스)) as StaticImageData;

  return (
    <Image
      src={image}
      alt={item}
      width={500}
      priority={true}
      style={{ height: "auto" }}
    />
  );
};

export default CrystalImage;
