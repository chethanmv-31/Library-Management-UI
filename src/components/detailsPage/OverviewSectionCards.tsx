import React from "react";

interface OverviewSectionCardsProps {
  header: string;
  description?: string;
  number?: number;
}

const OverviewSectionCards = ({
  header,
  description,
  number,
}: OverviewSectionCardsProps) => {
  return (
    <div className="w-1/4 bg-white grid justify-center items-center rounded-md border-2 pt-1 pb-1">
      <h2 className="text-[16px] text-[#666666] font-semibold  text-center">{header}</h2>
      {description && (
        <p className="text-[18px] font-semibold text-center text-[#F27851]">
          {description}
        </p>
      )}
      {number && (
        <p className="text-[18px] font-semibold text-center">{number}</p>
      )}
    </div>
  );
};

export default OverviewSectionCards;
