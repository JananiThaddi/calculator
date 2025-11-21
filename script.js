function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const op = document.getElementById('operator').value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter valid numbers.";
  } else {
    switch (op) {
      case '+': result = num1 + num2; break;
      case '-': result = num1 - num2; break;
      case '*': result = num1 * num2; break;
      case '/':
        result = num2 === 0 ? "Cannot divide by zero." : num1 / num2;
        break;
      default: result = "Invalid operator.";
    }
  }

  document.getElementById('result').innerText = "Result: " + result;
}

