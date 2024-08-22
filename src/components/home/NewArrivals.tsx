import React from "react";
import BookCard from "./BookCard";

const NewArrivals = () => {
  return (
    <div className="bg-gradient-to-b from-[#EB5231] to-[#8A317C] rounded-lg p-[2px] text-white h-[233px] mx-auto shadow-lg relative flex-grow ">
      <p className="text-[25px] font-[500] transform rotate-[-90deg] absolute left-[18px] top-[90%] translate-y-[-50%] origin-top-left">
        New Arrivals
      </p>

      <div className="bg-white flex-1 ml-[60px] h-[229px] w-[803px] rounded-tr-lg rounded-br-lg flex justify-center items-center gap-9 px-8 overflow-x-scroll overflow-y-hidden scrollbar-hide mx-8">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
          <div key={item} className={`${index === 0 ? "pl-8" : ""}`}>
            <BookCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
