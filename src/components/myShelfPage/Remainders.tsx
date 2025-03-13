"use client";
import Image from "next/image";
import React from "react";

const latestUpdates = [
  {
    message: "Server Maintenance will be done on 16 Mar 2023 from 9AM to 10AM",
    department: "IT Department",
    postedDate: "14 Mar 2023",
  },
  {
    message: "Server Maintenance will be done on 16 Mar 2023 from 9AM to 10AM",
    department: "IT Department",
    postedDate: "14 Mar 2023",
  },
  {
    message: "Server Maintenance will be done on 16 Mar 2023 from 9AM to 10AM",
    department: "IT Department",
    postedDate: "14 Mar 2023",
  },
];

const pendingBooks = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    year: "1988",
    coverImage: "/assets/Rectangle 12.png",
    dueDate: "13 Mar 2023",
    status: "Over Due",
  },
  {
    title: "Java Script Scope & Closures",
    author: "Kyle Simpson",
    year: "2014",
    coverImage: "/assets/Rectangle 12.png",
    dueDate: "13 Mar 2023",
    status: "Over Due",
  },
];

const requestedBooks = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    year: "1988",
    coverImage: "/assets/Rectangle 12.png",
    expectedDate: "15 Mar 2023",
    status: "Not Yet Available",
    statusType: "pending", // for styling
  },
  {
    title: "Java Script Scope & Closures",
    author: "Kyle Simpson",
    year: "2014",
    coverImage: "/assets/Rectangle 12.png",
    expectedDate: "Returned From User",
    status: "Available Now",
    statusType: "available", // for styling
  },
];

const Remainders = () => {
  return (
    <div className="mb-10">
      <p className="text-2xl text-[#4D4D4D] font-semibold mb-6 mt-8">Remainders</p>
      <div className="grid grid-cols-3 gap-8 mt-8">
        {/* Latest Updates Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-[1.3rem] font-semibold mb-5 text-[#4D4D4D]">
            Latest Updates
          </h2>
          <div className="space-y-4">
            {latestUpdates.map((update, index) => (
              <div
                key={index}
                className={`pb-6 ${
                  index !== latestUpdates.length - 1 ? "border-b border-gray-200 mb-6" : ""
                }`}
              >
                <p className="font-medium mb-4">{update.message}</p>
                <>
                  <p className="text-md font-semibold text-[#4D4D4D] mb-5">
                    {update.department}
                  </p>
                  <p className="text-sm text-[#4D4D4D]">
                    Posted on {update.postedDate}
                  </p>
                </>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Books Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-[1.3rem] font-semibold mb-5 text-[#4D4D4D]">
            Pending Books
          </h2>
          <div className="space-y-4">
            {pendingBooks.map((book, index) => (
              <div
                key={index}
                className={`flex gap-4 pb-6 ${
                  index !== pendingBooks.length - 1 ? "border-b border-gray-200 mb-6" : ""
                }`}
              >
                <div>
                  <Image
                    src={book.coverImage}
                    alt="Book Cover"
                    width={75}
                    height={100}
                    className="rounded-md mb-2"
                  />
                  <p className="text-sm">{book.dueDate}</p>
                  <p className="text-red-500 text-sm">({book.status})</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-3">{book.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {book.author}, {book.year}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <button className="px-7 py-2 mt-8 text-sm cursor-pointer rounded-md transition-all duration-300 hover:scale-105 text-[#e16743] border border-[#e16743] hover:bg-[#e16743] hover:text-white">
                      Return
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requested Books Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-[1.3rem] font-semibold mb-5 text-[#4D4D4D]">
            Requested Books
          </h2>
          <div className="space-y-4">
            {requestedBooks.map((book, index) => (
              <div
                key={index}
                className={`flex gap-4 pb-6 ${
                  index !== requestedBooks.length - 1 ? "border-b border-gray-200 mb-6" : ""
                }`}
              >
                <div>
                  <Image
                    src={book.coverImage}
                    alt="Book Cover"
                    width={75}
                    height={100}
                    className="rounded-md mb-2"
                  />

                  <p className="text-sm text-[#4D4D4D]">
                    {book.expectedDate !== "Returned From User" ? "Expected by" : ""}
                  </p>
                  <p className="text-sm text-[#4D4D4D] w-[5.5rem]">
                    {book.expectedDate}
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-3">{book.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {book.author}, {book.year}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span
                      className={`px-6 py-2 mt-8 text-sm rounded-md ${
                        book.statusType === "available"
                          ? "bg-green-500 text-white hover:bg-green-600 cursor-pointer transition-all duration-300 hover:scale-105"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {book.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Remainders;
