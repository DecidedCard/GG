import React from "react";
import Image, { StaticImageData } from "next/image";

import Adele from "@/../public/assets/maple/jopImage/Adele.png";
import Angelic_Buster from "@/../public/assets/maple/jopImage/Angelic_Buster.jpg";
import Aran from "@/../public/assets/maple/jopImage/Aran.jpg";
import Arch_Mage_FP from "@/../public/assets/maple/jopImage/Arch_Mage_FP.jpg";
import Arch_Mage_IL from "@/../public/assets/maple/jopImage/Arch_Mage_IL.jpg";
import Ark from "@/../public/assets/maple/jopImage/Ark.jpg";
import Battle_Mage from "@/../public/assets/maple/jopImage/Battle_Mage.jpg";
import Bishop from "@/../public/assets/maple/jopImage/Bishop.jpg";
import Blaster from "@/../public/assets/maple/jopImage/Blaster.jpg";
import Bowmaster from "@/../public/assets/maple/jopImage/Bowmaster.jpg";
import Cadena from "@/../public/assets/maple/jopImage/Cadena.jpg";
import Cannon_Shooter from "@/../public/assets/maple/jopImage/Cannon_Shooter.jpg";
import Captain from "@/../public/assets/maple/jopImage/Captain.jpg";
import Dark_Knight from "@/../public/assets/maple/jopImage/Dark_Knight.jpg";
import Demon_Avenger from "@/../public/assets/maple/jopImage/Demon_Avenger.jpg";
import Demon_Slayer from "@/../public/assets/maple/jopImage/Demon_Slayer.jpg";
import Dual_Blade from "@/../public/assets/maple/jopImage/Dual_Blade.jpg";
import Eunwol from "@/../public/assets/maple/jopImage/Eunwol.jpg";
import Evan from "@/../public/assets/maple/jopImage/Evan.jpg";
import Flame_Wizard from "@/../public/assets/maple/jopImage/Flame_Wizard.jpg";
import Hero from "@/../public/assets/maple/jopImage/Hero.jpg";
import Ho_Young from "@/../public/assets/maple/jopImage/Ho_Young.jpg";
import Illium from "@/../public/assets/maple/jopImage/Illium.jpg";
import Kain from "@/../public/assets/maple/jopImage/Kain.jpg";
import Kaiser from "@/../public/assets/maple/jopImage/Kaiser.jpg";
import Khali from "@/../public/assets/maple/jopImage/Khali.jpg";
import Kinesis from "@/../public/assets/maple/jopImage/Kinesis.jpg";
import Lara from "@/../public/assets/maple/jopImage/Lara.jpg";
import Luminous from "@/../public/assets/maple/jopImage/Luminous.jpg";
import Marksman from "@/../public/assets/maple/jopImage/Marksman.jpg";
import Mechanic from "@/../public/assets/maple/jopImage/Mechanic.jpg";
import Mercedes from "@/../public/assets/maple/jopImage/Mercedes.jpg";
import Mihile from "@/../public/assets/maple/jopImage/Mihile.jpg";
import Night_Lord from "@/../public/assets/maple/jopImage/Night_Lord.jpg";
import Night_Walker from "@/../public/assets/maple/jopImage/Night_Walker.jpg";
import Paladin from "@/../public/assets/maple/jopImage/Paladin.jpg";
import Pathfinder from "@/../public/assets/maple/jopImage/Pathfinder.jpg";
import Phantom from "@/../public/assets/maple/jopImage/Phantom.jpg";
import Shadower from "@/../public/assets/maple/jopImage/Shadower.jpg";
import Soul_Master from "@/../public/assets/maple/jopImage/Soul_Master.jpg";
import Striker from "@/../public/assets/maple/jopImage/Striker.jpg";
import Viper from "@/../public/assets/maple/jopImage/Viper.jpg";
import Wild_Hunter from "@/../public/assets/maple/jopImage/Wild_Hunter.jpg";
import Wind_Breaker from "@/../public/assets/maple/jopImage/Wind_Breaker.jpg";
import Xenon from "@/../public/assets/maple/jopImage/Xenon.jpg";
import Zero from "@/../public/assets/maple/jopImage/Zero.jpg";

const JopImage = ({ jop }: { jop: string }) => {
  const image = ((jop === "아델" && Adele) ||
    (jop === "엔젤릭버스터" && Angelic_Buster) ||
    (jop === "아란" && Aran) ||
    (jop === "아크메이지(불,독)" && Arch_Mage_FP) ||
    (jop === "아크메이지(썬,콜)" && Arch_Mage_IL) ||
    (jop === "아크" && Ark) ||
    (jop === "배틀메이지" && Battle_Mage) ||
    (jop === "비숍" && Bishop) ||
    (jop === "블래스터" && Blaster) ||
    (jop === "보우마스터" && Bowmaster) ||
    (jop === "카데나" && Cadena) ||
    (jop === "캐논마스터" && Cannon_Shooter) ||
    (jop === "캡틴" && Captain) ||
    (jop === "다크나이트" && Dark_Knight) ||
    (jop === "데몬어벤져" && Demon_Avenger) ||
    (jop === "데몬슬레이어" && Demon_Slayer) ||
    (jop === "듀얼블레이더" && Dual_Blade) ||
    (jop === "은월" && Eunwol) ||
    (jop === "에반" && Evan) ||
    (jop === "플레임위자드" && Flame_Wizard) ||
    (jop === "히어로" && Hero) ||
    (jop === "호영" && Ho_Young) ||
    (jop === "일리움" && Illium) ||
    (jop === "카인" && Kain) ||
    (jop === "카이저" && Kaiser) ||
    (jop === "칼리" && Khali) ||
    (jop === "키네시스" && Kinesis) ||
    (jop === "라라" && Lara) ||
    (jop === "루미너스" && Luminous) ||
    (jop === "신궁" && Marksman) ||
    (jop === "메카닉" && Mechanic) ||
    (jop === "메르세데스" && Mercedes) ||
    (jop === "미하일" && Mihile) ||
    (jop === "나이트로드" && Night_Lord) ||
    (jop === "나이트워커" && Night_Walker) ||
    (jop === "팔라딘" && Paladin) ||
    (jop === "패스파인더" && Pathfinder) ||
    (jop === "팬텀" && Phantom) ||
    (jop === "새도어" && Shadower) ||
    (jop === "소울마스터" && Soul_Master) ||
    (jop === "스트라이커" && Striker) ||
    (jop === "바이퍼" && Viper) ||
    (jop === "와일드헌터" && Wild_Hunter) ||
    (jop === "윈드브레이커" && Wind_Breaker) ||
    (jop === "제논" && Xenon) ||
    (jop === "제로" && Zero)) as StaticImageData;

  return image && <Image src={image} alt={jop} />;
};

export default JopImage;
