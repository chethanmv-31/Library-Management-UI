import React from "react";

const Quotes: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#EB5231] to-[#8A317C] rounded-lg p-7 text-white w-[543px] mx-auto shadow-lg">
      <h2 className="text-[25px] font-[500]">Today's Quote</h2>
      <p className="mt-4 text-xl ">
        “There is more treasure in books than in all the pirate’s loot on
        Treasure Island.”
      </p>

      <p className="mt-5 text-right ">-Walt Disney</p>

      {/* Pagination dots */}
      <div className="flex mt-6 space-x-2">
        <span className="block w-2 h-2 bg-white rounded-full opacity-50"></span>
        <span className="block w-2 h-2 bg-white rounded-full opacity-50"></span>
        <span className="block w-2 h-2 bg-white rounded-full opacity-50"></span>
        <span className="block w-2 h-2 bg-white rounded-full"></span>
      </div>
    </div>
  );
};

export default Quotes;
