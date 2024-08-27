import BookSections from "@/components/home/BookSection";
import NewArrivals from "@/components/home/NewArrivals";
import Quotes from "@/components/home/Quotes";

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
    <div className="h-screen overflow-y-auto scrollbar-hide">
      <div className=" flex gap-10  pb-[3.25rem] pt-4">
        <Quotes />
        <NewArrivals />
      </div>
      <p className="text-[35px] font-semibold">{greeting}</p>
      <div className="  mt-[12px] pb-48">
        <BookSections heading="Recommended for You" />
        <BookSections heading="Recent Readings" />
        <BookSections heading="Academic Books" />
        <BookSections heading="Journals, Articles & Paper Publications" />
        <BookSections heading="News" />
      </div>
    </div>
  );
}
