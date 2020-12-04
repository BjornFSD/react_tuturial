import React, { useState, useEffect, useRef } from "react";
import { useWindowScroll } from "react-use";
import { ReactComponent as ScrollTop } from "../Svg/arrowToTop.svg";

function ScrollToTop({ content }) {
  const refToTop = useRef(null);

  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  // console.log(beka);
  const scrollTo = () =>
    window.scrollTo({ top: content.current.offsetTop, behavior: "smooth" });

  useEffect(() => {
    const beka = document.querySelector(".content").offsetTop;
    if (pageYOffset > beka) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  if (!visible) {
    return false;
  }

  return (
    <div ref={refToTop} onClick={scrollTo} className="scroll_to-top">
      <ScrollTop className="scroll_to-top--animation" />
    </div>
  );
}

export default ScrollToTop;
