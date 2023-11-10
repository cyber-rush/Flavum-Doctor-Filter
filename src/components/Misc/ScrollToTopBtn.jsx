import { useEffect } from "react";
import "./ScrollToTopBtn.css";
import { ImArrowUp2 } from "react-icons/im";

const ScrollToTopBtn = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        var scroll = document.querySelector(".icon-style");
        scroll.classList.toggle("active", window.scrollY > 400);
      });
    }
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      <ImArrowUp2
        className="icon-position icon-style p-2"
        onClick={goToTop}
      ></ImArrowUp2>
    </div>
  );
};
export default ScrollToTopBtn;
