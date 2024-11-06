import React from "react";
import Image, { StaticImageData } from "next/image";

import Adele from "@/../public/assets/maple/jopImage/Adele.webp";
import Angelic_Buster from "@/../public/assets/maple/jopImage/Angelic_Buster.webp";
import Aran from "@/../public/assets/maple/jopImage/Aran.webp";
import Arch_Mage_FP from "@/../public/assets/maple/jopImage/Arch_Mage_FP.webp";
import Arch_Mage_IL from "@/../public/assets/maple/jopImage/Arch_Mage_IL.webp";
import Ark from "@/../public/assets/maple/jopImage/Ark.webp";
import Battle_Mage from "@/../public/assets/maple/jopImage/Battle_Mage.webp";
import Bishop from "@/../public/assets/maple/jopImage/Bishop.webp";
import Blaster from "@/../public/assets/maple/jopImage/Blaster.webp";
import Bowmaster from "@/../public/assets/maple/jopImage/Bowmaster.webp";
import Cadena from "@/../public/assets/maple/jopImage/Cadena.webp";
import Cannon_Shooter from "@/../public/assets/maple/jopImage/Cannon_Shooter.webp";
import Captain from "@/../public/assets/maple/jopImage/Captain.webp";
import Dark_Knight from "@/../public/assets/maple/jopImage/Dark_Knight.webp";
import Demon_Avenger from "@/../public/assets/maple/jopImage/Demon_Avenger.webp";
import Demon_Slayer from "@/../public/assets/maple/jopImage/Demon_Slayer.webp";
import Dual_Blade from "@/../public/assets/maple/jopImage/Dual_Blade.webp";
import Eunwol from "@/../public/assets/maple/jopImage/Eunwol.webp";
import Evan from "@/../public/assets/maple/jopImage/Evan.webp";
import Flame_Wizard from "@/../public/assets/maple/jopImage/Flame_Wizard.webp";
import Hero from "@/../public/assets/maple/jopImage/Hero.webp";
import Ho_Young from "@/../public/assets/maple/jopImage/Ho_Young.webp";
import Illium from "@/../public/assets/maple/jopImage/Illium.webp";
import Kain from "@/../public/assets/maple/jopImage/Kain.webp";
import Kaiser from "@/../public/assets/maple/jopImage/Kaiser.webp";
import Khali from "@/../public/assets/maple/jopImage/Khali.webp";
import Kinesis from "@/../public/assets/maple/jopImage/Kinesis.webp";
import Lara from "@/../public/assets/maple/jopImage/Lara.webp";
import Luminous from "@/../public/assets/maple/jopImage/Luminous.webp";
import Marksman from "@/../public/assets/maple/jopImage/Marksman.webp";
import Mechanic from "@/../public/assets/maple/jopImage/Mechanic.webp";
import Mercedes from "@/../public/assets/maple/jopImage/Mercedes.webp";
import Mihile from "@/../public/assets/maple/jopImage/Mihile.webp";
import Night_Lord from "@/../public/assets/maple/jopImage/Night_Lord.webp";
import Night_Walker from "@/../public/assets/maple/jopImage/Night_Walker.webp";
import Paladin from "@/../public/assets/maple/jopImage/Paladin.webp";
import Pathfinder from "@/../public/assets/maple/jopImage/Pathfinder.webp";
import Phantom from "@/../public/assets/maple/jopImage/Phantom.webp";
import Shadower from "@/../public/assets/maple/jopImage/Shadower.webp";
import Soul_Master from "@/../public/assets/maple/jopImage/Soul_Master.webp";
import Striker from "@/../public/assets/maple/jopImage/Striker.webp";
import Viper from "@/../public/assets/maple/jopImage/Viper.webp";
import Wild_Hunter from "@/../public/assets/maple/jopImage/Wild_Hunter.webp";
import Wind_Breaker from "@/../public/assets/maple/jopImage/Wind_Breaker.webp";
import Xenon from "@/../public/assets/maple/jopImage/Xenon.webp";
import Zero from "@/../public/assets/maple/jopImage/Zero.webp";

const jopImage: { [key: string]: StaticImageData } = {
  아델: Adele,
  엔젤릭버스터: Angelic_Buster,
  아란: Aran,
  "아크메이지(불,독)": Arch_Mage_FP,
  "아크메이지(썬,콜)": Arch_Mage_IL,
  아크: Ark,
  배틀메이지: Battle_Mage,
  비숍: Bishop,
  블래스터: Blaster,
  보우마스터: Bowmaster,
  카데나: Cadena,
  캐논마스터: Cannon_Shooter,
  캡틴: Captain,
  다크나이트: Dark_Knight,
  데몬어벤져: Demon_Avenger,
  데몬슬레이어: Demon_Slayer,
  듀얼블레이더: Dual_Blade,
  은월: Eunwol,
  에반: Evan,
  플레임위자드: Flame_Wizard,
  히어로: Hero,
  호영: Ho_Young,
  일리움: Illium,
  카인: Kain,
  카이저: Kaiser,
  칼리: Khali,
  키네시스: Kinesis,
  라라: Lara,
  루미너스: Luminous,
  신궁: Marksman,
  메카닉: Mechanic,
  메르세데스: Mercedes,
  미하일: Mihile,
  나이트로드: Night_Lord,
  나이트워커: Night_Walker,
  팔라딘: Paladin,
  패스파인더: Pathfinder,
  팬텀: Phantom,
  섀도어: Shadower,
  소울마스터: Soul_Master,
  스트라이커: Striker,
  바이퍼: Viper,
  와일드헌터: Wild_Hunter,
  윈드브레이커: Wind_Breaker,
  제논: Xenon,
  제로: Zero,
};

const JopImage = ({ jop }: { jop: string }) => {
  const image = jopImage[jop];
  return (
    image && (
      <Image
        src={image}
        alt={jop}
        width={500}
        height={411}
        style={{ height: "auto" }}
        loading="lazy"
      />
    )
  );
};

export default JopImage;
