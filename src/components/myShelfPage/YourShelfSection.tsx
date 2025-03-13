"use client";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React, { useState } from "react";
import TabsSection from "./TabsSection";
import NotesAndBookmarks from "./NotesAndBookmarks";
import Remainders from "./Remainders";

const YourShelfSection = () => {
  return (
    <div>
      <p className="text-2xl text-[#000000] font-semibold">
        Your <span className="text-[#F27851]">Shelf</span>
      </p>
      <TabsSection />
      <NotesAndBookmarks />
      <Remainders />
    </div>
  );
};

export default YourShelfSection;
