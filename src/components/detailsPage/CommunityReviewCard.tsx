import React from "react";

interface TagData {
  label: string;
  value: string;
  percentage: number;
}

interface CategoryData {
  category: string;
  tags: TagData[];
}

const CommunityReviewCard = () => {
  const bookAttributes: CategoryData[] = [
    {
      category: "PACE",
      tags: [{ label: "Meandering", value: "Meandering", percentage: 100 }],
    },
    {
      category: "ENJOYABILITY",
      tags: [{ label: "Interesting", value: "Interesting", percentage: 100 }],
    },
    {
      category: "DIFFICULTY",
      tags: [{ label: "Advanced", value: "Advanced", percentage: 100 }],
    },
    {
      category: "GENRES",
      tags: [
        { label: "Horror", value: "Horror", percentage: 66 },
        { label: "Mystery", value: "Mystery", percentage: 33 },
      ],
    },
    {
      category: "MOOD",
      tags: [
        { label: "Ominous", value: "Ominous", percentage: 25 },
        { label: "Scientific", value: "Scientific", percentage: 25 },
      ],
    },
    {
      category: "IMPRESSIONS",
      tags: [
        { label: "Overhyped", value: "Overhyped", percentage: 50 },
        { label: "Forgettable", value: "Forgettable", percentage: 50 },
      ],
    },
    {
      category: "LENGTH",
      tags: [{ label: "Short", value: "Short", percentage: 100 }],
    },
  ];

  return (
    <div className="bg-white w-1/2 h-full border-2 rounded-md p-8 text-[#4D4D4D]">
      <div className="flex justify-between">
        <p className=" font-semibold text-2xl mb-8">Community Reviews</p>
        <p className="text-[#F27851] underline underline-offset-4">Feedback?</p>
      </div>

      {bookAttributes.map((category) => (
        <div key={category.category }className="flex gap-8 mb-6 items-center">
          <strong>{category.category}</strong>
          <div className="flex gap-4 items-center">
            {category.tags.map((tag) => (
              <span key={tag.label} className="border p-2 rounded-full">
               <span className="text-[#000000] pr-2">
                {tag.label} 
                </span> 
                {tag.percentage}%
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityReviewCard;
