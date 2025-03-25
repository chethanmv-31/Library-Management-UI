"use client";

import ContributionForm from "@/components/contribution/ContributionForm";
import ContributionInfo from "@/components/contribution/ContributionInfo";
import ContributionSuccess from "@/components/contribution/ContributionSuccess";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useState } from "react";

export default function ContributionPage() {
  const [isContributionSubmitted, setIsContributionSubmitted] = useState(false);

  const handleSubmit = (formData: any) => {
    // Handle form submission logic here
    console.log(formData);
    setIsContributionSubmitted(true);
  };

  const handleBack = () => {
    setIsContributionSubmitted(false);
  };

  return (
    <ProtectedRoute>
      <div>
        {isContributionSubmitted ? (
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 mb-8 hover:text-gray-800"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        ) : (
          <div className="lex items-center text-gray-600 mb-8 pb-7 hover:text-gray-800"></div>
        )}
        <div className="">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left side - Form */}
            {isContributionSubmitted ? (
              <ContributionSuccess />
            ) : (
              <ContributionForm onSubmit={handleSubmit} />
            )}

            {/* Right side - Contribution Info */}
            <div className="w-[35rem]">
              <ContributionInfo />
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
