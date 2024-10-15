import Link from "next/link";

import ImageCard from "@/components/common/ImageCard";

import maple from "@/../public/assets/maple/maple.png";

export default function Home() {
  return (
    <main className="p-4 mx-auto w-[1280px] text-text-100">
      <div className="p-4 bg-bg-300 h-96 rounded-lg">
        <Link href={"/maple"} className="flex flex-col gap-2">
          <ImageCard image={maple} alt="메이플스토리" />
          <h2 className="text-body/18px">메이플스토리</h2>
        </Link>
      </div>
    </main>
  );
}
