document.addEventListener("DOMContentLoaded", function () {
  /////////////////////////////////////////////variables//////////////////////////////////////////////////
  var operators = "";
  var num1 = "";
  var num2 = "";
  var answer;
  var opratorWritten;

  /////////////////////////////////////////Printing the number //////////////////////////////////////////
  document.getElementById("number").addEventListener("click", (event) => {
    if (operators === "") {
      num1 += event.target.getAttribute("value");
      document.getElementById("write").innerHTML = num1;
      // console.log("num1:" + num1);
    } else {
      num2 += event.target.getAttribute("value");
      document.getElementById("write").innerHTML = num1 + operators + num2;
      // console.log("num2:" + num2);
    }
  });
  /////////////////////////////////////////////////printing the oprator////////////////////////////////////
  document.getElementById("operation").addEventListener("click", (event) => {
    operators = event.target.getAttribute("value");
    opratorWritten = document.getElementById("write").innerHTML += operators;
    console.log("operator:" + operators);
  });
  /////////////////////////////////////////////////equal the problem////////////////////////////////////////
  document.getElementById("equal").addEventListener("click", (event) => {
    switch (operators) {
      case "+":
        answer = plus();
        break;
      case "-":
        answer = minus();
        break;
      case "*":
        answer = multiply();
        break;
      case "/":
        answer = divide();
        break;
    }

    document.getElementById("write").innerHTML = answer;
    function plus() {
      console.log(num1, num2);
      return Number(num1) + Number(num2);
    }
    function minus() {
      return Number(num1) - Number(num2);
    }
    function multiply() {
      return Number(num1) * Number(num2);
    }
    function divide() {
      return Number(num1) / Number(num2);
    }
  });
  ////////////////////////////////////////erasing all the number which are written//////////////////////////
  document.getElementById("buttonClear").addEventListener("click", clear);
  function clear() {
    // document.getElementById("write").innerHTML = "";
    //location.reload();
  }
});
