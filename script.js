document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("display");
    let buttons = document.querySelectorAll(".btn");
  
    let currentInput = "";
    let result = 0;
    let operator = null;
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        let buttonText = button.textContent;
        
        if (buttonText >= "0" && buttonText <= "9") {
          currentInput += buttonText;
        } else if (buttonText === "." && !currentInput.includes(".")) {
          currentInput += buttonText;
        } else if (buttonText === "C") {
          currentInput = "";
          result = 0;
          operator = null;
        } else if (buttonText === "←") {
          currentInput = currentInput.slice(0, -1);
        } else if (["+", "-", "*", "/"].includes(buttonText)) {
          if (operator !== null) {
            result = performOperation(result, parseFloat(currentInput), operator);
            display.textContent = result;
          } else {
            result = parseFloat(currentInput);
          }
          currentInput = "";
          operator = buttonText;
        } else if (buttonText === "=") {
          if (operator !== null) {
            result = performOperation(result, parseFloat(currentInput), operator);
            display.textContent = result;
            currentInput = "";
            operator = null;
          }
        }
  
        display.textContent = currentInput || result;
      });
    });
  });
  
  function performOperation(num1, num2, operator) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0) {
          alert("Error: Division by zero");
          return 0;
        }
        return num1 / num2;
    }
  }