import React from "react";
import Image from "next/image";

interface types {
  isIntro: boolean;
}
const BookCard = ({ isIntro }: types) => {
  const width = isIntro ? 123 : 133
  return (
    <div
      className={`${
        isIntro
          ? "shadow-lg border drop-shadow-lg w-[167px]  h-[203px] "
          : "w-[165px]  flex-col h-[275px] py-[17px]"
      } rounded-lg flex items-center justify-center `}
    >
     
        <Image
          src="/assets/Rectangle 12.png"
          alt={""}
          width={width}
          height={173}
          className="rounded-md"
        />
        {!isIntro && (
          <div >
            <p className="text-[13px] pt-2">The Design of Every..</p>
            <p className="text-[11px] py-[3px]">
              Don Norman,<span> 1988</span>
            </p>
            <p  className="text-[11px]">4.5/ <span className="text-gray-400">5</span></p>
          </div>
        )}
      </div>
  );
};

export default BookCard;
