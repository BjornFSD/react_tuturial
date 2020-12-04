import React from "react";

function Welcome() {
  const Welcome = (props) => {
    return <h1>Cześć, {props.name}</h1>;
  };

  return <Welcome name="Michał" />;
}

export default Welcome;
