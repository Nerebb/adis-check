import React from "react";
import { useLocation } from "react-router-dom";

export const NotFoundAds = () => {
  const location = useLocation();
  return (
    <div
      style={{
        textAlign: "center",
        margin: "40px auto",
      }}
    >
      <h3>
        No ads found - <a href={location.pathname}>Please Reload the page</a>
      </h3>
      <a href="/" className="text-danger">
        Go to homepage
      </a>
    </div>
  );
};
