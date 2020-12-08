import React, { useRef } from "react";
import "./App.scss";
import Home from "./Components/Home";
import Content from "./Components/Content";
import ScrollToTop from "./Components/ScrollToTop";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn } from "./actions/action";

function App() {
  const content = useRef(null);

  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <ScrollToTop content={content} />
      <Home content={content} />
      <Content content={content} />
      <div className="redux">
        <h1>Counter: {counter}</h1>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          plusik
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          minusik
        </button>
        <button
          onClick={() => {
            dispatch(signIn());
          }}
        >
          {isLogged ? <p>Wyloguj</p> : <p>Zaloguj</p>}
        </button>
        {isLogged ? <h1>Jesteś zalogowany</h1> : <h1>Jesteś wylogowany</h1>}
        {console.log(`${counter} i ${isLogged}`)}
      </div>
    </div>
  );
}

export default App;
