import Link from "next/link";

import ImageCard from "@/components/common/ImageCard";

import maple from "@/../public/assets/maple/maple.png";

const Home = () => {
  return (
    <main className="p-4 mx-auto w-[1280px] min-h-screen text-text-100 lg:w-full md:w-full sm:w-full">
      <div className="flex justify-start items-start p-4 bg-bg-300 rounded-lg sm:justify-center">
        <Link href={"/maple"} className="flex flex-col gap-2 w-fit">
          <ImageCard image={maple} alt="메이플스토리" />
          <h2 className="text-body/18px text-center">메이플스토리</h2>
        </Link>
      </div>
    </main>
  );
};

export default Home;
