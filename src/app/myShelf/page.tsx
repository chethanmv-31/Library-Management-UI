'use client'
import YourShelfSection from "@/components/myShelfPage/YourShelfSection";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import React from "react";

const page = () => {
  return (
    <ProtectedRoute>
      <div className="h-[750px] overflow-y-auto scrollbar-hide">
        <YourShelfSection />
      </div>
    </ProtectedRoute>
  );
};

export default page;
