import React from "react";
import Image from "next/image";

const BookCard = () => {
  return (
    <div className="shadow-lg rounded-lg h-[203px] w-[167px] flex items-center justify-center border drop-shadow-lg">
      <Image
        src="/assets/Rectangle 12.png"
        alt={""}
        width={123}
        height={173}
        className="rounded-md"
      />
    </div>
  );
};

export default BookCard;
