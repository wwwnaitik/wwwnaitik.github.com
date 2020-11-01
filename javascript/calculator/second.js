document.addEventListener("DOMContentLoaded", function () {
  var operator = "";
  var num1 = "";
  var num2 = "";
  var answer;
  var largest = "";
  var opratorWritten;
  document.getElementById("number").addEventListener("click", (event) => {
    if (operator === "") {
      num1 += event.target.getAttribute("value");
      document.getElementById("write").innerHTML = num1;
      console.log("num1:" + num1);
    } else {
      num2 += event.target.getAttribute("value");
      document.getElementById("write").innerHTML = num1 + operator + num2;
      console.log("num2:" + num2);
    }
  });

  document.getElementById("operation").addEventListener("click", (event) => {
    operator = event.target.getAttribute("value");
    opratorWritten = document.getElementById("write").innerHTML += operator;
    console.log("operator:" + operator);
  });
  /////////////////////////////////////////////////equal the problem///////////////////////////////////////////////
  document.getElementById("equal").addEventListener("click", (event) => {
    switch (operator) {
      case "+":
        answer = document.getElementById("write").innerHTML = plus();
        break;
      case "-":
        answer = document.getElementById("write").innerHTML = minus();
        break;
      case "*":
        answer = document.getElementById("write").innerHTML = multiply();
        break;
      case "/":
        answer = document.getElementById("write").innerHTML = divide();
        break;
    }
    function plus() {
      parseInt(num1) + parseInt(num2);
    }
    function minus() {}
    function multiply() {}
    function divide() {}
  });
});
