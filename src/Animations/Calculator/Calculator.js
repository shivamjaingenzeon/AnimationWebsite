import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("");
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(expression);
        setDisplayValue(result.toString());
        setExpression(result.toString());
      } catch (error) {
        setDisplayValue("Error");
        setExpression("");
      }
    } else if (value === "C") {
      setDisplayValue("");
      setExpression("");
    } else {
      setDisplayValue((prevDisplayValue) => prevDisplayValue + value);
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  return (
    <div className="calculator">
      <header className="calculator-header">Calculator</header>
      <input type="text" className="display" value={displayValue} readOnly />
      <div className="buttons">
        <button
          className="btn btn-7"
          value="7"
          onClick={() => handleButtonClick("7")}
        >
          7
        </button>
        <button
          className="btn btn-8"
          value="8"
          onClick={() => handleButtonClick("8")}
        >
          8
        </button>
        <button
          className="btn btn-9"
          value="9"
          onClick={() => handleButtonClick("9")}
        >
          9
        </button>
        <button
          className="btn btn-plus"
          value="+"
          onClick={() => handleButtonClick("+")}
        >
          +
        </button>
        <button
          className="btn btn-4"
          value="4"
          onClick={() => handleButtonClick("4")}
        >
          4
        </button>
        <button
          className="btn btn-5"
          value="5"
          onClick={() => handleButtonClick("5")}
        >
          5
        </button>
        <button
          className="btn btn-6"
          value="6"
          onClick={() => handleButtonClick("6")}
        >
          6
        </button>
        <button
          className="btn btn-minus"
          value="-"
          onClick={() => handleButtonClick("-")}
        >
          -
        </button>
        <button
          className="btn btn-1"
          value="1"
          onClick={() => handleButtonClick("1")}
        >
          1
        </button>
        <button
          className="btn btn-2"
          value="2"
          onClick={() => handleButtonClick("2")}
        >
          2
        </button>
        <button
          className="btn btn-3"
          value="3"
          onClick={() => handleButtonClick("3")}
        >
          3
        </button>
        <button
          className="btn btn-multiply"
          value="*"
          onClick={() => handleButtonClick("*")}
        >
          *
        </button>
        <button
          className="btn btn-0"
          value="0"
          onClick={() => handleButtonClick("0")}
        >
          0
        </button>
        <button
          className="btn btn-dot"
          value="."
          onClick={() => handleButtonClick(".")}
        >
          .
        </button>
        <button
          className="btn btn-equal"
          value="="
          onClick={() => handleButtonClick("=")}
        >
          =
        </button>
        <button
          className="btn btn-divide"
          value="/"
          onClick={() => handleButtonClick("/")}
        >
          /
        </button>
        <button
          className="btn btn-C"
          value="C"
          onClick={() => handleButtonClick("C")}
        >
          C
        </button>
      </div>
      <div className="expression">Expression: {expression}</div>
    </div>
  );
}

export default Calculator;
