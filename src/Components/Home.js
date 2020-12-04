import React, { useRef, useEffect } from "react";
import { ReactComponent as Scene } from "../Svg/Strzalka.svg";
import gsap from "gsap";

function Home({ content }) {
  const wrapper = useRef(null);

  const scrollTo = () =>
    window.scrollTo({ top: content.current.offsetTop, behavior: "smooth" });

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const arrow = elements.getElementById("Strzalka");

    gsap.set([arrow], { autoAlpha: 1 });

    const tl = gsap.timeline({
      defaults: { repeat: -1, ease: "power0" },
    });

    tl.fromTo(arrow, { y: "-=101" }, { duration: 4, y: "+=203" });
  }, []);
  return (
    <div className="home">
      <div className="home_title">ReactJS w pigułce</div>
      <div ref={wrapper} className="arrow">
        <Scene onClick={scrollTo} />
      </div>
    </div>
  );
}

export default Home;
