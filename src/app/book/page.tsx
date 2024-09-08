"use client";

import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Link from "next/link";
import Rating from "@mui/material/Rating";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Button from "@/components/Button";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";
const BookDetailsPage = () => {
  const [value, setValue] = useState<number | null>(2);

  const isHardCopyAvailable = false;
  const isEbookAvailable = true;
  const isAudioAvailable = true;

  return (
    <div className="">
      <div className="flex items-center gap-3 pb-4">
        <ArrowBackIcon sx={{ color: "#4D4D4D" }} />
        <p>Back to results</p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-[70px]">
          <div className="grid gap-12 overflow-y-auto scrollbar-hide h-[47rem]">
            <div className="bg-white w-[273px] h-[390px] p-5 rounded-md">
              <Image
                src="/assets/Rectangle 12.png"
                alt={""}
                width={209}
                height={277}
                className="rounded-md mx-auto border border-black"
              />
              <div className="flex justify-around my-5">
                <div className="flex flex-col items-center">
                  <RateReviewOutlinedIcon />
                  <p>Review</p>
                </div>
                <div className="flex flex-col items-center ">
                  <ShareOutlinedIcon />
                  <p>Share</p>
                </div>
              </div>
            </div>
            <div className="bg-white w-[273px] h-[297px] p-5 rounded-md">
              <p className="text-[20px] font-semibold text-center pb-[25px]">
                <span className="text-[#F27851]">Buy </span>
                this book Online
              </p>
              <div className="mb-[23px]">
                <Link href={""}>
                  <div className="flex items-center gap-[16px] pl-[13px]">
                    <Image
                      src={"/assets/flipkart.png"}
                      alt={""}
                      width={40}
                      height={40}
                    />
                    <p className="text-[15px] underline">Buy Now</p>
                  </div>
                </Link>
              </div>
              <div className="mb-[38px]">
                <Link href={""}>
                  <div className="flex items-center gap-[23px] pl-[18px]">
                    <Image
                      src={"/assets/amazon.png"}
                      alt={""}
                      width={29}
                      height={29}
                    />
                    <p className="text-[15px] underline">Buy Now</p>
                  </div>
                </Link>
              </div>
              <p className="text-[10.92px] w-[186px] m-auto font-semibold">
                When you buy books using these links the Internet Archive may
                earn a &nbsp;
                <span className="underline">small commission.</span>
              </p>
            </div>
          </div>
          <div className="w-[505px]">
            <p className="text-[35px] text-[#4D4D4D] pb-[38px]">
              Don’t Make Me Think{" "}
            </p>

            <p className="pb-4">
              By&nbsp;
              <Link href={""} className="underline text-[15px] ">
                Steve Krug,
              </Link>
              &nbsp;2000
            </p>

            <p className="text-[15px] text-[#9A9A9A] ">Second Edition</p>

            <div className="flex justify-between">
              <div className="flex gap-2">
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />{" "}
                <p className="text-[14px] font-medium">{value}.0 Ratings</p>
              </div>
              <p className="text-[14px] font-medium">25 Currently reading</p>
              <p className="text-[14px] font-medium">119 Have read</p>
            </div>
            <div className="pt-[30px] flex gap-[30px]">
              <div>
                <p className="w-[140px] text-[15px] font-bold pb-2">
                  Availability
                </p>
                <div className="w-[140px]">
                  <div className="flex gap-2 pb-2">
                    {isHardCopyAvailable ? (
                      <CheckCircleIcon sx={{ color: "#42BB4E" }} />
                    ) : (
                      <CancelIcon sx={{ color: "#4D4D4D" }} />
                    )}
                    <p className="">Hard Copy</p>
                  </div>
                  <div className="flex gap-2 pb-2 ">
                    {isEbookAvailable ? (
                      <CheckCircleIcon sx={{ color: "#42BB4E" }} />
                    ) : (
                      <CancelIcon sx={{ color: "#4D4D4D" }} />
                    )}
                    <p className="">E - Book</p>
                  </div>
                  <div className="flex gap-2 pb-2">
                    {isAudioAvailable ? (
                      <CheckCircleIcon sx={{ color: "#42BB4E" }} />
                    ) : (
                      <CancelIcon sx={{ color: "#4D4D4D" }} />
                    )}
                    <p className="">Audio book</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="w-[140px] text-[15px] font-bold pb-2">Status</p>
                <div className=" flex flex-col gap-3">
                  <p className="w-[85px] h-[26px] bg-[#42BB4E] text-white text-center rounded-md">
                    In-Shelf
                  </p>
                  <div className="flex justify-between items-center w-[85px]">
                    <FmdGoodIcon sx={{ color: "#F76B56" }} />
                    <p className="text-[15px]"> CS A-15</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between ">
              <Button
                buttonText={"BORROW"}
                buttonColor="#F27851"
                textColor="#fff"
                width={"210px"}
              />

              <Button
                buttonText={"Read Now"}
                buttonColor="#41B64D"
                textColor="#fff"
                width={"210px"}
                icon={
                  <HeadphonesRoundedIcon
                    sx={{ height: "33px", width: "33px" }}
                  />
                }
              />
            </div>
          </div>
        </div>
        <div className="w-[450px] h-[420px] bg-white rounded-xl p-[30px]">
          <p className="text-xl font-semibold">
            <span className="text-[#F27851]">About</span> Author
          </p>
          <div className="flex items-center gap-16">
            <p className="text-xl w-[160px]">Steve Krug</p>
            <Image
              src="/assets/Rectangle 19 (1).png"
              alt={""}
              width={88}
              height={100}
            />
          </div>
          <p className="text-[13px] my-1">
            Steve Krug is a usability consultant who has more than 30 years of
            experience as a user advocate for companies like Apple, Netscape,
            AOL, Lexus, and others. Based in part on the success of his first
            book, Don't Make Me Think, he has become a highly sought-after
            speaker on usability design.
          </p>
          <p className="text-[15px] mt-3 font-bold">Other Books</p>

          <div className="flex space-x-8 my-1">
            {[1, 2, 3].map((item) => (
              <div className="w-[77px] h-[100px] border border-[#F1F1F1] rounded-md">
                <Image
                  src="/assets/Rectangle 12.png"
                  alt={""}
                  width={75}
                  height={95}
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default BookDetailsPage;
