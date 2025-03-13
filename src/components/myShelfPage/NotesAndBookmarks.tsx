import React from "react";
const NotesAndBookmarks = () => {
  return (
    <div className="mb-14" >
      <p className="text-2xl text-[#4D4D4D] font-semibold mb-6">
        Notes & <span className="text-[#F27851]">Bookmarks</span>
      </p>

      <div className="flex flex-wrap gap-4 text-center">
        <div className="bg-[#F09643] rounded-lg p-6 cursor-pointer min-w-[13.75rem] min-h-[9.3125rem] text-white hover:shadow-lg transition-all flex flex-col justify-center">
          <h3 className="font-medium text-lg">UX Design</h3>
          <p className="text-sm mt-2 opacity-80">Last Edited 2hrs ago</p>
        </div>

        <div className="bg-[#EC6C9A] rounded-lg p-6 cursor-pointer min-w-[13.75rem] min-h-[9.3125rem] text-white hover:shadow-lg transition-all flex flex-col justify-center">
          <h3 className="font-medium text-lg">JS Notes</h3>
          <p className="text-sm mt-2 opacity-80">Last Edited 2hrs ago</p>
        </div>

        <div className="bg-[#57CF63] rounded-lg p-6 cursor-pointer  w-1/3 min-h-[149px] text-white hover:shadow-lg transition-all flex flex-col justify-center">
          <h3 className="font-medium text-lg">Don&apos;t Make Me Think Notes</h3>
          <p className="text-sm mt-2 opacity-80">Last Edited 2hrs ago</p>
        </div>

        <div className="bg-[#6E23CD] rounded-lg p-6 cursor-pointer w-1/3 min-h-[149px] text-white hover:shadow-lg transition-all flex flex-col justify-center">
          <h3 className="font-medium text-lg">Exam Preparation</h3>
          <p className="text-sm mt-2 opacity-80">Last Edited 1hrs ago</p>
        </div>
      </div>
    </div>
  );
};

export default NotesAndBookmarks;
