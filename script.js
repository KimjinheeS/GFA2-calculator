function calculate(operation) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = 0;
    var message = "";
    switch (operation) {
      case "+":
        result = num1 + num2;
        message = "The sum of " + num1 + " and " + num2 + " is " + result;
        break;
      case "-":
        result = num1 - num2;
        message = "The difference between " + num1 + " and " + num2 + " is " + result;
        break;
      case "*":
        result = num1 * num2;
        message = "The product of " + num1 + " and " + num2 + " is " + result;
        break;
      case "/":
        result = num1 / num2;
        message = "The quotient of " + num1 + " divided by " + num2 + " is " + result;
        break;
      case "%":
        result = num1 % num2;
        message = "The remainder of " + num1 + " divided by " + num2 + " is " + result;
        break;
    }
    document.getElementById("result").innerHTML = message;
  }