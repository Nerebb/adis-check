import { useEffect, useState } from "react";

const Spinner = ({ fadeOut = true }) => {
  const [loading, setLoading] = useState(fadeOut);
  console.log("🚀 ~ file: Spinner.js:5 ~ Spinner ~ loading:", loading);

  useEffect(() => {
    if (!loading) return;
    const preloaderFadeOutTime = 800;

    const hidePreloader = () => {
      const preloader = document.querySelector(".spinner-wrapper");
      preloader.style.transition = `opacity ${preloaderFadeOutTime}ms`;
      preloader.style.opacity = "0";

      const interval = setTimeout(() => {
        setLoading(false);
        // preloader.style.pointerEvents = "none";
      }, preloaderFadeOutTime);
      return () => {
        clearInterval(interval);
        preloader.style.opacity = "100";
      };
    };

    hidePreloader();
  }, [loading]);

  return (
    <div class="spinner-wrapper" style={{ pointerEvents: "none" }}>
      <div class="centercenter">
        <div class="spinner-grow2 logocolor" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
