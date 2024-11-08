import React from "react";
import Image, { StaticImageData } from "next/image";

import Adele from "@/../public/assets/maple/jopImage/Adele.png";
import Angelic_Buster from "@/../public/assets/maple/jopImage/Angelic_Buster.png";
import Aran from "@/../public/assets/maple/jopImage/Aran.png";
import Arch_Mage_FP from "@/../public/assets/maple/jopImage/Arch_Mage_FP.png";
import Arch_Mage_IL from "@/../public/assets/maple/jopImage/Arch_Mage_IL.png";
import Ark from "@/../public/assets/maple/jopImage/Ark.png";
import Battle_Mage from "@/../public/assets/maple/jopImage/Battle_Mage.png";
import Bishop from "@/../public/assets/maple/jopImage/Bishop.png";
import Blaster from "@/../public/assets/maple/jopImage/Blaster.png";
import Bowmaster from "@/../public/assets/maple/jopImage/Bowmaster.png";
import Cadena from "@/../public/assets/maple/jopImage/Cadena.png";
import Cannon_Shooter from "@/../public/assets/maple/jopImage/Cannon_Shooter.png";
import Captain from "@/../public/assets/maple/jopImage/Captain.png";
import Dark_Knight from "@/../public/assets/maple/jopImage/Dark_Knight.png";
import Demon_Avenger from "@/../public/assets/maple/jopImage/Demon_Avenger.png";
import Demon_Slayer from "@/../public/assets/maple/jopImage/Demon_Slayer.png";
import Dual_Blade from "@/../public/assets/maple/jopImage/Dual_Blade.png";
import Eunwol from "@/../public/assets/maple/jopImage/Eunwol.png";
import Evan from "@/../public/assets/maple/jopImage/Evan.png";
import Flame_Wizard from "@/../public/assets/maple/jopImage/Flame_Wizard.png";
import Hero from "@/../public/assets/maple/jopImage/Hero.png";
import Ho_Young from "@/../public/assets/maple/jopImage/Ho_Young.png";
import Illium from "@/../public/assets/maple/jopImage/Illium.png";
import Kain from "@/../public/assets/maple/jopImage/Kain.png";
import Kaiser from "@/../public/assets/maple/jopImage/Kaiser.png";
import Khali from "@/../public/assets/maple/jopImage/Khali.png";
import Kinesis from "@/../public/assets/maple/jopImage/Kinesis.png";
import Lara from "@/../public/assets/maple/jopImage/Lara.png";
import Luminous from "@/../public/assets/maple/jopImage/Luminous.png";
import Marksman from "@/../public/assets/maple/jopImage/Marksman.png";
import Mechanic from "@/../public/assets/maple/jopImage/Mechanic.png";
import Mercedes from "@/../public/assets/maple/jopImage/Mercedes.png";
import Mihile from "@/../public/assets/maple/jopImage/Mihile.png";
import Night_Lord from "@/../public/assets/maple/jopImage/Night_Lord.png";
import Night_Walker from "@/../public/assets/maple/jopImage/Night_Walker.png";
import Paladin from "@/../public/assets/maple/jopImage/Paladin.png";
import Pathfinder from "@/../public/assets/maple/jopImage/Pathfinder.png";
import Phantom from "@/../public/assets/maple/jopImage/Phantom.png";
import Shadower from "@/../public/assets/maple/jopImage/Shadower.png";
import Soul_Master from "@/../public/assets/maple/jopImage/Soul_Master.png";
import Striker from "@/../public/assets/maple/jopImage/Striker.png";
import Viper from "@/../public/assets/maple/jopImage/Viper.png";
import Wild_Hunter from "@/../public/assets/maple/jopImage/Wild_Hunter.png";
import Wind_Breaker from "@/../public/assets/maple/jopImage/Wind_Breaker.png";
import Xenon from "@/../public/assets/maple/jopImage/Xenon.png";
import Zero from "@/../public/assets/maple/jopImage/Zero.png";

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
        fill
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, 500px"
      />
    )
  );
};

export default JopImage;
