import React from "react";

export const LoadingCircle = ({ height = 25, width = 25, color = "white" }) => {
  return (
    <svg
      className="LoadingCircle"
      height={height}
      width={width}
      viewBox="0 0 50 50"
    >
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
        stroke={color}
      ></circle>
    </svg>
  );
};
