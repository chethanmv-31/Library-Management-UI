import AcademicsBooks from "@/components/home/AcademicsBooks";
import BookCard from "@/components/home/BookCard";
import JournalsSection from "@/components/home/JournalsSection";
import NewArrivals from "@/components/home/NewArrivals";
import News from "@/components/home/News";
import Quotes from "@/components/home/Quotes";
import RecentReadings from "@/components/home/RecentReadings";
import RecommendedSection from "@/components/home/RecommendedSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex gap-10 py-[3.25rem]">
        <Quotes />
        <NewArrivals />
      </div>
      <p>Good Morning</p>
      <RecommendedSection />
      <RecentReadings />
      <AcademicsBooks />
      <JournalsSection />
      <News />
    </div>
  );
}
