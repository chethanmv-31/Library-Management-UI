import ContributionInfo from "@/components/contribution/ContributionInfo";
import CreateBookForm from "@/components/createBook/CreateBookForm";
import React from "react";

const CreateBook = () => {
  return (
      <div className="mx-auto my-16 justify-center items-center flex gap-10">
        <div className="w-[65%]">
          <CreateBookForm />
        </div>
        <div className="w-[40%]">
          <ContributionInfo />
        </div>
      </div>
  );
};

export default CreateBook;
