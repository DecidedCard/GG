import Link from "next/link";

import ImageCard from "@/components/common/ImageCard";

import maple from "@/../public/assets/maple/maple.png";

export default function Home() {
  return (
    <main className="p-4 mx-auto w-[1280px] text-text-100">
      <div className="p-4 bg-bg-300 h-96 rounded-lg">
        <Link href={"/maple"}>
          <ImageCard image={maple} alt="메이플" />
        </Link>
      </div>
    </main>
  );
}
