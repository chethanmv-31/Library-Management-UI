import Image from "next/image";
import React from "react";

interface TabCardsProps {
  title: string;
  author: string;
  year: string;
  rating: number;
  borrowedOn: string;
  submissionDue: string;
  status: string;
  type: string;
  image: string;
  isOverdue: boolean;
  serialNo?: string;
  onReturnClick: (serialNo?: string) => void;
}

const TabCards = ({
  title,
  author,
  year,
  rating,
  borrowedOn,
  submissionDue,
  status,
  type,
  image,
  isOverdue,
  serialNo,
  onReturnClick
}: TabCardsProps) => {
  return (
    <div className="flex bg-white w-full max-w-[360px] p-4 rounded-xl shadow-sm relative ">
      {isOverdue && <span className="absolute top-2 right-2 w-2 h-2 bg-red-400 rounded-full"/>}
      <div className="space-y-2 w-1/2">
        <Image
          src={image}
          width={130}
          height={170}
          alt={`${title} cover`}
          className="w-[140px] h-[170px] rounded-md"
        />
        <h3 className="font-medium text-[#4D4D4D]">{title}</h3>
        <p className="text-sm text-gray-600">{author}, {year}</p>
        <p className="text-sm font-medium">
          {rating}<span className="text-gray-500">/5</span>
        </p>
      </div>
      <div className="flex flex-col justify-between w-1/2">
        <div className="space-y-4">
          <div>
            <p className="text-lg text-[#4D4D4D] font-medium leading-10">Borrowed on</p>
            <p className="text-sm ">{borrowedOn}</p>
          </div>
          <div>
            <p className="text-lg text-[#4D4D4D] font-medium leading-[3rem]">Submission Due</p>
            <p className="text-sm ">{submissionDue} {isOverdue && <span className="text-red-500 text-[12px]">(Over Due)</span>}</p>
          </div>
        </div>
        <div className="space-y-2">
          <button className="w-full py-2 px-3 bg-gray-200 text-gray-700 rounded-md text-sm font-medium cursor-auto">
            {status}
          </button>
          {type === "Physical" && (
            <button 
              onClick={() => onReturnClick(serialNo)}
              className="w-full py-2 px-3 border border-[#F27851] text-[#F27851] rounded-md text-sm font-medium hover:bg-[#F27851] hover:text-white transition-colors"
            >
              Return
            </button>
          )}
          {type === "Digital" && (
            <button className="w-full py-2 px-3 border border-[#F27851] text-[#F27851] rounded-md text-sm font-medium hover:bg-[#F27851] hover:text-white transition-colors">
              Read
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabCards;