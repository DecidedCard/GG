import Link from "next/link";

import ImageCard from "@/components/common/ImageCard";

import maple from "@/../public/assets/maple/메이플스토리.jpg";

export default function Home() {
  return (
    <main className="p-4">
      <p className="text-body/26px">게임 정보 페이지</p>
      <Link href={"/maple"}>
        <ImageCard image={maple} alt="메이플" />
      </Link>
    </main>
  );
}
