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
