import React, { useState } from 'react';
import './App.css';
import Buttons from "./components/Buttons";
import Display from './components/Display';

function App() {
  const [expression, setExpression] = useState("");

  const [input, setInput] = useState("0");

  function handleInput(newInput) {
    setInput(newInput);
  };

  function handleExpression(newExpression) {
    setExpression(newExpression);
  };

  const operatorRegex = /^[/*\-+]$/;  
  const decimalRegex = /[.]/;
  const numberWithoutDecimalRegex = /^-?\d+$/;
  const numberWithDecimalRegex = /^-?\d+.\d*$/;
  const equalSignRegex = /[=]/g;

  function onClick(keyClicked) {
    const digitRegex = /[\d]/;
    const oneToNineRegex = /[1-9]/;
    const zeroRegex = /^[0]$/;
    const numberPadRegex = /[\d.]/;
    const operatorMinusHyphenRegex = /[/*+]/;
    const operatorMinusPlusRegex = /[/*-]/;
    const hyphenRegex = /^[-]$/;
    const plusRegex = /^[+]$/;

    // handles if button clicked after = is pressed
    if (equalSignRegex.test(expression)) {
      const splitAtEqualSign = expression.split("=");
      if (operatorRegex.test(keyClicked)) {
        handleInput(keyClicked)
        handleExpression(splitAtEqualSign[1] + " " + keyClicked);
      } else if (decimalRegex.test(keyClicked)) {
        handleInput("0.");
        handleExpression("0.");
      } else if (digitRegex.test(keyClicked)) {
        handleInput(keyClicked);
        handleExpression(keyClicked);
      };
    // handle which keys can be pressed at the start and what they do  
    } else if (zeroRegex.test(input) && expression.length === 0) {
      if (decimalRegex.test(keyClicked)) {
        handleInput("0.");
        handleExpression("0.");
      } else if (digitRegex.test(keyClicked)) {
        handleInput(keyClicked);
        handleExpression(keyClicked);
      } else if (hyphenRegex.test(keyClicked)) {
        handleInput(keyClicked);
        handleExpression(keyClicked);
      } else if (operatorMinusHyphenRegex.test(keyClicked)) {
        // do nothing
      };
    // handle what input is acceptable after a "0" is clicked
    } else if (zeroRegex.test(input) && zeroRegex.test(expression)) {
      if (hyphenRegex.test(keyClicked) || oneToNineRegex.test(keyClicked)) {
        handleInput(keyClicked);
        handleExpression(keyClicked);
      } else if (decimalRegex.test(keyClicked)) {
        handleInput(input + keyClicked);
        handleExpression(expression + keyClicked);
      } else if (operatorMinusHyphenRegex.test(keyClicked)) {
        handleInput(keyClicked);
        handleExpression(expression + keyClicked);
      } else if (zeroRegex.test(keyClicked)) {
        // do nothing
      };
    // handles the initial input being a hyphen
    } else if (hyphenRegex.test(input)) {
      if (decimalRegex.test(keyClicked)) {
        handleInput(input + "0.");
        handleExpression(expression + "0.");
      } else if (digitRegex.test(keyClicked)) {
        handleInput(input + keyClicked);
        handleExpression(expression + keyClicked);
      } else if (plusRegex.test(keyClicked)) {
        handleInput(keyClicked);
        handleExpression(expression.slice(0,-2) + " " + keyClicked);
      } else if (operatorMinusPlusRegex.test(keyClicked)) {
        // do nothing
      };
    // handle input being an operator while expression is more than that
    } else if (operatorRegex.test(input)) {
      if (hyphenRegex.test(keyClicked)) {
        handleInput(keyClicked);
        handleExpression(expression + " " + keyClicked)
      } else if (operatorMinusHyphenRegex.test(keyClicked)) {
        handleInput(keyClicked);
        handleExpression(expression.slice(0,-2) + " " + keyClicked);
      } else if (digitRegex.test(keyClicked)) {
        handleInput(keyClicked);
        handleExpression(expression + " " + keyClicked);
      } else if (decimalRegex.test(keyClicked)) {
        handleInput("0.");
        handleExpression(expression + " 0.");
      };
    // handle what to do if there is an integer in the input variable  
    } else if (numberWithoutDecimalRegex.test(input) && !zeroRegex.test(input) && (input.length <= 22)) {
      if (numberPadRegex.test(keyClicked)) {
        handleInput(input + keyClicked);
        handleExpression(expression + keyClicked);
      } else if (operatorRegex.test(keyClicked)) {
        handleInput(keyClicked);
        handleExpression(expression + " " + keyClicked);
      };
    // handle if the input variable is a float point number
    } else if (numberWithDecimalRegex.test(input) && (input.length <= 22)) {
      if (digitRegex.test(keyClicked)) {
        handleInput(input + keyClicked);
        handleExpression(expression + keyClicked);
      } else if (operatorRegex.test(keyClicked)) {
        handleInput(keyClicked);
        handleExpression(expression + " " + keyClicked);
      } else if (decimalRegex.test(keyClicked)) {
        // do nothing
      };
    };
  };

  // onClick function for the AC button
  function allClearClick() {
    handleInput("0");
    handleExpression("");
  };

  // onClick function for the EqualSign Button
  function equalSignClick() {
    const numberOperatorArray = expression.split(" ");
    const lastInArray = numberOperatorArray[(numberOperatorArray.length - 1)];

    if (operatorRegex.test(lastInArray)) {
      handleExpression(expression.slice(0, -2));
      numberOperatorArray.pop();
    };

    var operatorsArray = [];
    var numbersArray = [];

    for (let i = 0; i < numberOperatorArray.length; i++) {
      if (numberWithDecimalRegex.test(numberOperatorArray[i])) {
        numbersArray.push(parseFloat(numberOperatorArray[i]));
      } else if (numberWithoutDecimalRegex.test(numberOperatorArray[i])) {
        numbersArray.push(parseInt(numberOperatorArray[i]));
      } else if (operatorRegex.test(numberOperatorArray[i])) {
        operatorsArray.push(numberOperatorArray[i]);
      } else if (equalSignRegex.test(numberOperatorArray[i])) {
        // do nothing
      };
    };

    while (operatorsArray.length >= 1) {
      for (let i = 0; i < operatorsArray.length;) {
        if (operatorsArray[i].match(/[*/]/)) {
          if (operatorsArray[i].match(/[*]/)) {
            const multiplied = numbersArray[i] * numbersArray[i+1];
            operatorsArray.splice(i, 1);
            numbersArray.splice(i, 2, multiplied);
          } else if (operatorsArray[i].match(/[/]/)) {
            const divided = numbersArray[i] / numbersArray[i+1];
            operatorsArray.splice(i, 1);
            numbersArray.splice(i, 2, divided);
          };
        } else {
          i++;
        };
      };
      for (let i = 0; i < operatorsArray.length; i++) {
        if (operatorsArray[i].match(/[+]/)) {
          const added = numbersArray[i] + numbersArray[i+1];
          operatorsArray.splice(i, 1);
          numbersArray.splice(i, 2, added);
        } else if (operatorsArray[i].match(/[-]/)) {
          const subtracted = numbersArray[i] - numbersArray[i+1];
          operatorsArray.splice(i, 1);
          numbersArray.splice(i, 2, subtracted);
        };
      };
    };

    var answer = numbersArray[0];

    if (equalSignRegex.test(expression)) {
      const afterEqualSign = expression.split('=');
      handleExpression(afterEqualSign[1]);
    } else {
      handleInput(answer);
      handleExpression(expression + " = " + answer);
    };
  };

  const appStyle = {
    border: "solid black 5px",
    borderBottom: "0px",
    width: "350px",
    minHeight: "425px",
    height: "auto",
    display: "flex",
    flexWrap: "wrap",
    background: "black"
  };

  return (
    <div style={appStyle} >
      <Display 
        expression={expression} 
        input={input} 
      />
      <Buttons 
        onClick={onClick}
        input={input} 
        expression={expression} 
        allClearClick={allClearClick}
        equalSignClick={equalSignClick}
      />
    </div>
  )
};

export default App;