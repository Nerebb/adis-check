import { useEffect, useState } from "react";

const Spinner = ({ fadeOut = true }) => {
  const [loading, setLoading] = useState(fadeOut);

  useEffect(() => {
    if (!loading) return;
    const preloaderFadeOutTime = 500;

    const hidePreloader = () => {
      const preloader = document.querySelector(".spinner-wrapper");
      preloader.style.transition = `opacity ${preloaderFadeOutTime}ms`;
      preloader.style.opacity = "0";

      setTimeout(() => {
        setLoading(false);
        preloader.style.display = "none";
      }, preloaderFadeOutTime);
    };

    hidePreloader();
  }, [loading]);

  return (
    <div class="spinner-wrapper">
      <div class="centercenter">
        <div class="spinner-grow2 logocolor" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
