document.addEventListener("DOMContentLoaded", () => {
  let OneNumber = "";
  let operator = "";
  let allNumbers = [];
  let allOprators = [];

  let questionElement = document.getElementById("write");
  document.querySelector(".number").addEventListener("click", (e) => {
    let valueOfBox = e.target.getAttribute("data-value");

    OneNumber = `${OneNumber}${valueOfBox}`;

    if (operator != "") allOprators.push(operator);
    operator = "";
    questionElement.innerHTML = questionElement.innerHTML + valueOfBox;
  });

  document.getElementById("operation").addEventListener("click", (e) => {
    operator = e.target.getAttribute("data-value");
    if (OneNumber != "") allNumbers.push(OneNumber);

    questionElement.innerHTML = questionElement.innerHTML + operator;

    OneNumber = "";
  });   

  document.getElementById("equal").addEventListener("click", (e) => {
    if (OneNumber != "") {
      allNumbers.push(OneNumber);
      OneNumber = "";
      operator = "";
    }
    let atTimeOprator = allOprators[0];
    let answer = "";

    switch (atTimeOprator) {
      case "+":
        answer = plus(allNumbers);
        break;
      case "-":
        answer = minus(allNumbers);
        break;
      case "*":
        answer = multiply(allNumbers);
        break;
      case "/":
        answer = division(allNumbers);
        break;
    }

    questionElement.innerHTML = answer;
  });

  function plus(numbers) {
    let total = numbers.reduce((accumulator, element) => {
      return parseInt(accumulator) + parseInt(element);
    });

    return total;
  }
  function minus(numbers) {
    let total = numbers.reduce((accumulator, element) => {
      return parseInt(accumulator) - parseInt(element);
    });

    return total;
  }
  function multiply(numbers) {
    let total = numbers.reduce((accumulator, element) => {
      return parseInt(accumulator) * parseInt(element);
    });

    return total;
  }
  function division(numbers) {
    let total = numbers.reduce((accumulator, element) => {
      return parseInt(accumulator) / parseInt(element);
    });

    return total;
  }
});
