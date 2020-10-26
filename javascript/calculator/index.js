var op = "+,-,*,/";
var num1, num2;

var num1 = prompt("please enter a number :");
var num2 = prompt("please enter another a number :");

var op = prompt("please enter a oprator i.e.+,-,*,/ :");

// Switch statement begins

switch (op) {
  // If user enter +

  case "+":
    document.write(parseInt(num1) + parseInt(num2));

    break;

  // If user enter -

  case "-":
    document.write(num1 - num2);

    break;

  // If user enter *

  case "*":
    document.write(num1 * num2);

    break;

  // If user enter /

  case "/":
    document.write(num1 / num2);

    break;

    //If user enter %

    if (false) {
      document.write("Error! operator is not correct");
    }

    break;
}
