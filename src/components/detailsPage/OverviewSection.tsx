import React from "react";
import OverviewSectionCards from "./OverviewSectionCards";
import BookDetailCard from "./BookDetailCard";
import CommunityReviewCard from "./CommunityReviewCard";

const OverViewSection = () => {
  return (
    <div>
      <div className="flex gap-6">
        <OverviewSectionCards header="Publish Date" number={2000} />
        <OverviewSectionCards
          header="Publisher"
          description="New Riders Press"
        />
        <OverviewSectionCards header="Language" description="English" />
        <OverviewSectionCards header="Pages" number={216} />
      </div>
      <p className="text-[16px] pt-8 pb-2 text-[#666666] font-semibold ">
        Previews available in: <span className="text-[#F27851]">English</span>
      </p>
      <div className="flex gap-12 mb-8">
        <BookDetailCard/>
        <CommunityReviewCard/>
      </div>
      <p>Since Don’t Make Me Think was first published in 2000, hundreds of thousands of Web designers and developers have relied on usability guru Steve Krug’s guide to help them understand the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical, it’s one of the best-loved and most...  <span className="text-[#F27851]">Read more </span></p>
    </div>
  );
};

export default OverViewSection;
