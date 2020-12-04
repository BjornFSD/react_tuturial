import React, { useRef } from "react";
import "./App.scss";
import Home from "./Components/Home";
import Content from "./Components/Content";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const content = useRef(null);

  return (
    <div className="App">
      <ScrollToTop content={content} />
      <Home content={content} />
      <Content content={content} />
    </div>
  );
}

export default App;
