import React from "react";
import Image from "next/image";

interface types {
  isIntro: boolean;
  title?: string;
  author?: string;
  year?: number;
  rating?: number;
  imageUrl?: string;
}

const BookCard = ({ isIntro, title, author, year, rating, imageUrl }: types) => {
  const width = isIntro ? 123 : 133;
  return (
    <div
      className={`${
        isIntro
          ? "shadow-lg border drop-shadow-lg w-[167px]  h-[203px] "
          : "w-[165px]  flex-col h-[275px] py-[17px]"
      } rounded-lg flex items-center justify-center `}
    >
      <Image
        src={imageUrl || "/assets/Rectangle 12.png"}
        alt={title || ""}
        width={width}
        height={173}
        className="rounded-md max-h-[173px] max-w-[123px]"
      />
      {!isIntro && (
        <div>
          <p className="text-[13px] pt-2">{title || "The Design of Every.."}</p>
          <p className="text-[11px] py-[3px]">
            {author || "Don Norman"},<span> {year || "1988"}</span>
          </p>
          <p className="text-[11px]">
            {rating || "4.5"}/ <span className="text-gray-400">5</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default BookCard;
