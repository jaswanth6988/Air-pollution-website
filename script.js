// Get the button element
const button = document.querySelector('button');

// Add a click event listener to the button
button.addEventListener('click', () => {
  // Get the value of the input element
  const inputValue = document.querySelector('input').value;

  // Check if the input value is a number
  if (isNaN(inputValue)) {
    alert('Please enter a valid number');
    return;
  }

  // Calculate the AQI category based on the input value
  let category;
  if (inputValue >= 0 && inputValue <= 50) {
    category = 'Good';
  } else if (inputValue >= 51 && inputValue <= 100) {
    category = 'Moderate';
  } else if (inputValue >= 101 && inputValue <= 150) {
    category = 'Unhealthy for Sensitive Groups';
  } else if (inputValue >= 151 && inputValue <= 200) {
    category = 'Unhealthy';
  } else if (inputValue >= 201 && inputValue <= 300) {
    category = 'Very Unhealthy';
  } else {
    category = 'Hazardous';
  }

  // Display the AQI category in the output element
  const output = document.querySelector('.output');
  output.textContent = `The Air Quality Index category is ${category}.`;
});
