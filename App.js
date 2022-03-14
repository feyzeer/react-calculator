import React, { useState } from "react";

function App() {
  let [calc, setCalc] = useState("");
  let [result, setResult] = useState("");

  const ops = ["/", "x", "+", "-", "."];

  const updateCalc = (value) => {
    setCalc(calc + value);
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(calc + value);
    }
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };
  const calculate = () => {
    calc = calc.replace("x", "*");
    console.log(typeof eval(calc));
    setCalc(eval(calc));
  };
  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  };

  const ClearInputs = () => {
    setCalc("");
  };
  return (
    <>
      <div className="container">
        <div className="calc-body">
          <div className="calc-screen">
            <div className="calc-operation"></div>
            <div className="calc-typed">{calc || "0"}</div>
          </div>
          <div className="calc-button-row">
          <div
              className="button c"
              onClick={() => {
                ClearInputs();
              }}
            >
              C
            </div>
           
            <div className="button l" onClick={() => updateCalc("/")}>
              /
            </div>
            <div className="button l" onClick={deleteLast}>
              ⌫
            </div>
            
          </div>
          <div className="calc-button-row">
            <div className="button" onClick={() => updateCalc("7")}>
              7
            </div>
            <div className="button" onClick={() => updateCalc("8")}>
              8
            </div>
            <div className="button" onClick={() => updateCalc("9")}>
              9
            </div>
            <div className="button l" onClick={() => updateCalc("x")}>
              x
            </div>
          </div>
          <div className="calc-button-row">
            <div className="button" onClick={() => updateCalc("4")}>
              4
            </div>
            <div className="button" onClick={() => updateCalc("5")}>
              5
            </div>
            <div className="button" onClick={() => updateCalc("6")}>
              6
            </div>
            <div className="button l" onClick={() => updateCalc("-")}>
              −
            </div>
          </div>
          <div className="calc-button-row">
            <div className="button" onClick={() => updateCalc("1")}>
              1
            </div>
            <div className="button" onClick={() => updateCalc("2")}>
              2
            </div>
            <div className="button" onClick={() => updateCalc("3")}>
              3
            </div>
            <div className="button l" onClick={() => updateCalc("+")}>
              +
            </div>
          </div>
          <div className="calc-button-row">
            <div className="button" onClick={() => updateCalc(".")}>
              .
            </div>
            <div className="button" onClick={() => updateCalc("0")}>
              0
            </div>
            <div className="button l" id="equal" onClick={() => calculate()}>
              =
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
