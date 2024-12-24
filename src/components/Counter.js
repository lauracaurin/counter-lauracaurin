import React, { useState } from "react";
import "../styles/App.scss";
import Message from "./Message";
import Buttons from "./Buttons";
import CounterDisplay from "./CounterDisplay";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [activeButton, setActiveButton] = useState("increment");
  const maxLimit = 10;
  const minLimit = 0;

  const handleIncrement = () => {
    if (count < maxLimit) {
      setCount(count + 1);
      setErrorMessage("");
      setActiveButton("increment");
    } else {
      setErrorMessage("¡El contador llegó a su máximo valor!");
    }
  };

  const handleDecrement = () => {
    if (count > minLimit) {
      setCount(count - 1);
      setErrorMessage("");
      setActiveButton("decrement");
    } else {
      setErrorMessage("¡El contador no puede ser menor a 0!");
    }
  };

  const handleReset = () => {
    setCount(0);
    setErrorMessage("");
    setActiveButton("reset");
  };

  const getButtonClass = (buttonName) => {
    return activeButton === buttonName ? "active-button" : "inactive-button";
  };

  return (
    <main className="main">
      <section className="buttons-section">
        <Buttons
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          handleReset={handleReset}
          getButtonClass={getButtonClass}
        />
      </section>

      <section className="counter-section">
        <CounterDisplay count={count} />
        <Message message={errorMessage} />
      </section>
    </main>
  );
};

export default Counter;
