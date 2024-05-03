function generateIcebreaker() {
  const questions = [
    "my goat Daniel !!!",
    "my goat Rene !!!",
    "my goat Kaaliyah !!!",
    "my goat Alfi !!!",
    "my goat Dante !!!",
    "my goat Kayla !!!",
    "my goat Abdi !!!",
    "my goat Victor !!!",
    "my goat Kadiatou !!!",

  ];

  // Randomly select a question
  const index = Math.floor(Math.random() * questions.length);

  document.getElementById("displayQuestion").innerHTML = "You are " +  questions[index];
  // return questions[index];
}

// Example usage:
let thequestion = generateIcebreaker();

function SayMyName(mysecretcode) {
  let myname = document.getElementById("myName").value;
  console.log(myname);
  alert(`Hi ${myname} - ${mysecretcode}`);
}


function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function calculate(operation) {
  // Get input values
  let number1 = Number(document.getElementById('numberOne').value);
  let number2 = Number(document.getElementById('numberTwo').value);
  
  // Validate input
  if (isNaN(number1) || isNaN(number2)) {
    alert("Please enter valid numbers");
    return;
  }
  let result;
  try {
    // Perform calculation based on selected operation
    switch (operation) {
      case 'add':
        result = add(number1, number2);
        break;
      case 'subtract':
        result = subtract(number1, number2);
        break;
      case 'multiply':
        result = multiply(number1, number2);
        break;
      case 'divide':
        result = divide(number1, number2);
        break;
      default:
        throw new Error("Invalid operation");
    }
    
    // Display result
    document.getElementById('result').innerHTML = result;
  } catch (error) {
    alert(error.message);
  }
}











