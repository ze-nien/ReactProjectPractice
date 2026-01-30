import { useState } from "react";
import "../calculator.css";

import React from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  const display = (value) => {
    if (isFinished || input === "Error") {
      setInput(value);
      setIsFinished(false);
    } else {
      setInput((prev) => prev + value);
    }

    //setInput(input + value);
  };
  const calculate = () => {
    try {
      // 建立一個臨時函式執行它
      // 如 input=2*3+3 -> return 2*3+3 -> new Function將字串變執行碼 -> 執行表達式得9
      const result = new Function(`return ${input}`)();
      setInput(String(result));
      setIsFinished(true);
    } catch (e) {
      setInput("Error");
      setIsFinished(false);
    }
    // setInput(eval(input));
  };
  const clear = () => setInput("");

  return (
    <form name="calc" className="calculator">
      <input type="text" className="value" value={input} />
      <span className="num clear" onClick={() => clear()}>
        c
      </span>
      <span onClick={() => display("/")}>/</span>
      <span onClick={() => display("*")}>*</span>
      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("-")}>-</span>
      <span onClick={() => display("4")}>4</span>
      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span className="plus" onClick={() => display("+")}>
        +
      </span>
      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>
      <span onClick={() => display(".")}>.</span>
      <span className="num eqaul" onClick={() => calculate()}>
        =
      </span>
    </form>
  );
};

export default Calculator;
