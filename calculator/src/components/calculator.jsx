import React, { useState } from "react";
import "./calculator.css";
const Calculator = () => {
  const [value, setValue] = useState("");
  // let input = document.getElementById("inputBox");
  // let buttons = document.querySelectorAll("button");
  // console.log("buttons:", buttons);

  // let string = "";
  // let arr = Array.from(buttons);
  // arr.forEach((button) => {
  //   button.addEventListener("click", (e) => {
  //     if (e.target.innerHTML == "=") {
  //       string = eval(string);
  //       input.value = string;
  //     } else if (e.target.innerHTML == "AC") {
  //       string = "";
  //       input.value = string;
  //     } else if (e.target.innerHTML == "DEL") {
  //       string = string.substring(0, string.length - 1);
  //       input.value = string;
  //     } else {
  //       string += e.target.innerHTML;
  //       input.value = string;
  //     }
  //   });
  // });

  function handleClick(event) {
    const buttonValue = event.target.value;
    switch (buttonValue) {
      case "DEL":
        setValue(value.substring(0, value.length - 1));
        break;
      case "AC":
        setValue("");
        break;
      case "=":
        try {
          const result = eval(value);
          setValue(result);
        } catch (error) {
          setValue("Error");
        }
        break;
      default:
        setValue(value + buttonValue);
        break;
    }
  }
  return (
    <>
      <div className="container">
        <div className="calculator">
          <input type="text" id="inputBox" placeholder="0" value={value} />
          <div>
            <button
              className="button operator"
              onClick={handleClick}
              value={"AC"}
            >
              AC
            </button>
            <button
              className="button operator"
              onClick={handleClick}
              value={"DEL"}
            >
              DEL
            </button>
            <button
              className="button operator"
              onClick={handleClick}
              value={"%"}
            >
              %
            </button>
            <button
              className="button operator"
              onClick={handleClick}
              value={"/"}
            >
              /
            </button>
          </div>
          <div>
            <button className="button" onClick={handleClick} value={"7"}>
              7
            </button>
            <button className="button" onClick={handleClick} value={"8"}>
              8
            </button>
            <button className="button" onClick={handleClick} value={"9"}>
              9
            </button>
            <button
              className="button operator"
              onClick={handleClick}
              value={"*"}
            >
              *
            </button>
          </div>
          <div>
            <button className="button" onClick={handleClick} value={"4"}>
              4
            </button>
            <button className="button" onClick={handleClick} value={"5"}>
              5
            </button>
            <button className="button" onClick={handleClick} value={"6"}>
              6
            </button>
            <button
              className="button operator"
              onClick={handleClick}
              value={"-"}
            >
              -
            </button>
          </div>
          <div>
            <button className="button" onClick={handleClick} value={"1"}>
              1
            </button>
            <button className="button" onClick={handleClick} value={"2"}>
              2
            </button>
            <button className="button" onClick={handleClick} value={"3"}>
              3
            </button>
            <button
              className="button operator"
              onClick={handleClick}
              value={"+"}
            >
              +
            </button>
          </div>

          <div>
            <button className="button" onClick={handleClick} value={"00"}>
              00
            </button>
            <button className="button" onClick={handleClick} value={"0"}>
              0
            </button>
            <button className="button" onClick={handleClick} value={"."}>
              .
            </button>
            <button
              className="button equalBtn"
              onClick={handleClick}
              value={"="}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Calculator;
