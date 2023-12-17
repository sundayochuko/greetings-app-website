function displayGreeting() {
  // Collect and store the values from name and age inputs
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (name && age) {
    const outputElement = document.getElementById("output");
    const greeting = generateGreeting(name, age);
    outputElement.textContent = greeting;
  } else {
    alert("Please enter both name and age");
  }

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
}

function generateGreeting(name, age) {
  age = parseInt(age);

  if (isNaN(age)) {
    return "Invalid age. Please enter a valid number";
  }

  let greeting = `Hello, ${name}! `;

  if (age < 18) {
    greeting += `You are a minor`;
  } else {
    greeting += `You are an adult`;
  }

  return greeting;
}
