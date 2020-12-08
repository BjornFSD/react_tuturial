import React, { useState } from "react";

import Data from "./data.json";

function Content({ content }) {
  const [isActive, setIsActive] = useState(false);

  const dataText = Data.map((data2) => {
    // console.log(data2.id);
    const dataLenght = Object.keys(Data).length;
    const transparent = (data2.id - 1) / (dataLenght - 1) / 2;
    const gradient = {
      background: `rgba(141, 227, 232, ${transparent})`,
    };
    return (
      <div
        className="article"
        style={gradient}
        key={`${data2.id}`}
        id={`${data2.id}`}
      >
        <div className="article_title">{data2.title}</div>
        <div className="article_desc">{data2.desc}</div>
        <img className="article_img" src={data2.img_undertext1} alt="" />
        <div className="article_subtitle">{data2.subtitle}</div>
        <img className="article_img" src={data2.img} alt="" />
        <div className="article_desc">{data2.desc_2}</div>
        <img className="article_img" src={data2.img_undertext2} alt="" />
        <div className="article_subtitle">{data2.subtitle_2}</div>
        <img className="article_img" src={data2.img_2} alt="" />
        <div className="article_desc">{data2.desc_3}</div>
        <img className="article_img" src={data2.img_3} alt="" />
        <div className="article_subtitle">{data2.subtitle_3}</div>
        <img className="article_img" src={data2.img_4} alt="" />
        <div className="article_desc">{data2.desc_4}</div>
        <img className="article_img" src={data2.img_5} alt="" />
        {/* {
          (data2 = "titles" ? (
            <div className="article_title">{data2.title}</div>
          ) : (
            "sad"
          ))
        } */}
      </div>
    );
  });
  // imports,  hooks, wady hooks, redux, context.api, gsap, api fetch, formularze react

  const dataTitles = Data.map((data) => {
    const scrollToTitle = () => {
      console.log(document.getElementById(data.id).offsetTop);
      window.scrollTo({
        top: document.getElementById(data.id).offsetTop - 5,
        behavior: "smooth",
      });
    };

    return (
      <div
        className="sidebar_titles"
        key={`${data.id}`}
        onClick={() => setIsActive(!isActive)}
      >
        <p onClick={scrollToTitle}>
          {data.id}. {data.title}
        </p>
      </div>
    );
  });

  return (
    <div className="content" ref={content}>
      <div
        className={
          isActive ? "sidebar_burger sidebar_burger-active" : "sidebar_burger"
        }
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? <p>Close</p> : <p>Menu</p>}
      </div>
      <div className={isActive ? "sidebar sidebar_active" : "sidebar"}>
        <p className="sidebar_title">Spis treści</p>

        {dataTitles}
      </div>
      <div className="textbar">{dataText}</div>
    </div>
  );
}

export default Content;
