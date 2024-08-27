"use client";

import { MenuItem, Select, styled } from "@mui/material";
import React from "react";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CancelIcon from "@mui/icons-material/Cancel";
type AgeOption = 10 | 20 | 30;

const Search = () => {
  const [age, setAge] = React.useState<AgeOption>(10);

  const CustomSelect = styled(Select)(({ theme }) => ({
    borderRadius: "30px",
    borderColor: "lightgray",
    background: "#fff", // Change to white
    width: "170px",
    height: "49px",
    backgroundColor: "#fff", // Change to white
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "lightgray",
      },
      "&:hover fieldset": {
        borderColor: "lightgray",
      },
      "&.Mui-focused fieldset": {
        borderColor: "lightgray",
      },
    },
    "& .MuiSelect-select": {
      borderRadius: "30px",
      padding: "8px 12px",
      backgroundColor: "#fff", // Ensures background is white even within the select dropdown
    },
    "& .MuiMenu-paper": {
      width: "120px",
      border: "none",
      boxShadow: "none",
    },
    "& .MuiPopover-paper": {
      border: "none",
    },
  }));

  const handleChange = (event: any) => {
    setAge(event.target.value as AgeOption);
  };

  const isHardCopyAvailable = false;
  const isEbookAvailable = true;
  const isAudioAvailable = true;

  return (
    <div>
      <CustomSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        onChange={handleChange}
      >
        <MenuItem value={10}>All</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomSelect>

      <section>
        <div className="flex justify-between mt-12 mb-5">
          <p className="w-[335px] text-[20px]">Title</p>
          <p className="w-[100px] text-[20px]">Ratings</p>
          <p className="w-[180px] text-[20px]">Category</p>
          <p className="w-[140px] text-[20px]">Availability</p>
          <p className="w-[375px] text-[20px]">Status</p>
        </div>
        <div className="h-[45rem] overflow-y-auto scrollbar-hide pb-20">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
            (item, index) => (
              <div
                key={index}
                className="bg-white p-6 py-4 rounded-lg mb-5 flex items-center justify-between h-[125px]"
              >
                <div className="flex justify-between w-[335px] items-center">
                  <Image
                    src={"/assets/Rectangle 16.png"}
                    alt={""}
                    width={75}
                    height={99}
                  />
                  <div className="w-[207px] ">
                    <p className="text-[20px]">Don’t Make Me Think </p>
                    <p className="text-[15px]">
                      Steve Krug, <span>2000</span>
                    </p>
                    <p className="text-[10px]">Second Edition</p>
                  </div>
                </div>
                <p className="text-[20px] w-[100px]">
                  4.5/ <span className="text-gray-400 text-[15px]">5</span>
                </p>
                <div className="w-[180px]">
                  <p className="text-[20px] leading-[55px]">Computer Science</p>
                  <p className="text-[15px]">UX Design</p>
                </div>
                <div className="w-[140px]">
                  <div className="flex gap-2">
                    {isHardCopyAvailable ? (
                      <CheckCircleIcon sx={{ color: "#42BB4E" }} />
                    ) : (
                      <CancelIcon sx={{ color: "#4D4D4D" }} />
                    )}
                    <p className="">Hard Copy</p>
                  </div>
                  <div className="flex gap-2 ">
                    {isEbookAvailable ? (
                      <CheckCircleIcon sx={{ color: "#42BB4E" }} />
                    ) : (
                      <CancelIcon sx={{ color: "#4D4D4D" }} />
                    )}
                    <p className="">E - Book</p>
                  </div>
                  <div className="flex gap-2 ">
                    {isAudioAvailable ? (
                      <CheckCircleIcon sx={{ color: "#42BB4E" }} />
                    ) : (
                      <CancelIcon sx={{ color: "#4D4D4D" }} />
                    )}
                    <p className="">Audio book</p>
                  </div>
                </div>
                <div className="w-[375px] flex justify-between items-center pl-[20px]">
                  <div className=" flex flex-col gap-3">
                    <p className="w-[85px] h-[26px] bg-[#42BB4E] text-white text-center rounded-md">
                      In-Shelf
                    </p>
                    <div className="flex justify-between items-center">
                      <FmdGoodIcon sx={{ color: "#F76B56" }} />
                      <p className=""> CS A-15</p>
                    </div>
                  </div>
                  <div className="w-[185px] flex justify-between items-center">
                    <FavoriteIcon sx={{ color: "#F34040" }} />
                    <p className="border-[#F76B56] w-[85px] h-[30px] text-[#F76B56] text-[15px] border rounded-md m-5 flex justify-center items-center cursor-pointer hover:bg-[#e26653] hover:text-white">
                      Preview
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Search;
