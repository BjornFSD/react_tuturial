import React from "react";
import Data from "./data.json";

function Content({ content }) {
  const dataText = Data.map((data2) => {
    console.log(data2.id);
    const dataLenght = Object.keys(Data).length;
    const transparent = (data2.id - 1) / (dataLenght - 1) / 2;
    const gradient = {
      background: `rgba(141, 227, 232, ${transparent})`,
    };
    return (
      <div className="article" style={gradient}>
        <div className="article_title" id={`${data2.id}`}>
          {data2.title}
        </div>
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
      </div>
    );
  });

  // imports,  hooks, wady hooks, redux, context.api, gsap, api fetch, formularze react

  const dataTitles = Data.map((data) => {
    const scrollToTitle = () => {
      window.scrollTo({
        top: document.getElementById(data.id).offsetTop - 30,
        behavior: "smooth",
      });
    };

    return (
      <div className="sidebar_titles">
        <p onClick={scrollToTitle}>
          {data.id}. {data.title}
        </p>
      </div>
    );
  });

  return (
    <div className="content" ref={content}>
      <div className="sidebar">
        <p className="sidebar_title">Spis treści</p>
        {dataTitles}
      </div>
      <div className="textbar">{dataText}</div>
    </div>
  );
}

export default Content;
