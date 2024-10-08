import Image, { StaticImageData } from "next/image";

import Akein from "@/../public/assets/maple/serverImage/Akein.png";
import Aurora from "@/../public/assets/maple/serverImage/Aurora.png";
import Bera from "@/../public/assets/maple/serverImage/Bera.png";
import Elysium from "@/../public/assets/maple/serverImage/Elysium.png";
import Enosis from "@/../public/assets/maple/serverImage/Enosis.png";
import Kroa from "@/../public/assets/maple/serverImage/Kroa.png";
import Luna from "@/../public/assets/maple/serverImage/Luna.png";
import Nova from "@/../public/assets/maple/serverImage/Nova.png";
import Red from "@/../public/assets/maple/serverImage/Red.png";
import Skania from "@/../public/assets/maple/serverImage/Skania.png";
import Union from "@/../public/assets/maple/serverImage/Union.png";
import Zenith from "@/../public/assets/maple/serverImage/Zenith.png";

const ServerImage = ({ server }: { server: string }) => {
  const image = ((server === "아케인" && Akein) ||
    (server === "오로라" && Aurora) ||
    (server === "베라" && Bera) ||
    (server === "엘리시움" && Elysium) ||
    (server === "이노시스" && Enosis) ||
    (server === "크로아" && Kroa) ||
    (server === "루나" && Luna) ||
    (server === "노바" && Nova) ||
    (server === "레드" && Red) ||
    (server === "스카니아" && Skania) ||
    (server === "유니온" && Union) ||
    (server === "제니스" && Zenith)) as StaticImageData;

  return <Image src={image} alt={server} />;
};

export default ServerImage;
