import React from "react";

export const LoadingUi = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-4 w-full">
      <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
};
