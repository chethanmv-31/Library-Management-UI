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
  const currentHour = new Date().getHours();

  let greeting;
  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good Afternoon";
  } else if (currentHour >= 17 && currentHour < 21) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }
  return (
    <div>
      <div className="flex gap-10 py-[3.25rem]">
        <Quotes />
        <NewArrivals />
      </div>
      <p className="text-[35px] font-semibold">{greeting}</p>
      <RecommendedSection />
      <RecentReadings />
      <AcademicsBooks />
      <JournalsSection />
      <News />
    </div>
  );
}
