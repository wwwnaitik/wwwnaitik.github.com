document.addEventListener("DOMContentLoaded", () => {
  let tmpNumber = "";
  let operator = "";
  let holdNumbers = [];
  let holdOperators = [];

  let equationElement = document.getElementById("write");
  document.querySelector(".number").addEventListener("click", (e) => {
    let dataValue = e.target.getAttribute("data-value");

    tmpNumber = `${tmpNumber}${dataValue}`;

    if (operator != "") holdOperators.push(operator);
    operator = "";

    console.log("temp number: " + tmpNumber);

    equationElement.innerHTML = equationElement.innerHTML + dataValue;
  });

  document.getElementById("operation").addEventListener("click", (e) => {
    operator = e.target.getAttribute("data-value");
    if (tmpNumber != "") holdNumbers.push(tmpNumber);
    //operator shoudl not come twice in sequence
    equationElement.innerHTML = equationElement.innerHTML + operator;

    tmpNumber = "";
  });

  document.getElementById("equal").addEventListener("click", (e) => {
    if (tmpNumber != "") {
      holdNumbers.push(tmpNumber);
      tmpNumber = "";
      operator = "";
    }
    console.log("Hold numbers: " + holdNumbers);

    let currentOperator = holdOperators[0];
    let result = "";

    switch (currentOperator) {
      case "+":
        result = plus(holdNumbers);
        break;
      case "-":
        result = minus(holdNumbers);
        break;
      case "*":
        result = multiply(holdNumbers);
        break;
      case "/":
        result = division(holdNumbers);
        break;
    }

    equationElement.innerHTML = result;
  });

  function plus(numbers) {
    let total = numbers.reduce((accumulator, element) => {
      return parseInt(accumulator) + parseInt(element);
    });

    return total;
  }
});
