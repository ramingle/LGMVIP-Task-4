const displayElement = document.querySelector('input[name="display"]');
function updateDisplay(value) {
  displayElement.value = value;
}

function handleButtonClick(event) {
  const buttonValue = event.target.value;
  const currentValue = displayElement.value;
  if (buttonValue === 'AC') { 
    updateDisplay('');
  }
  
  else if (buttonValue === 'DEL') {
    updateDisplay(currentValue.slice(0, -1));
  }
  
  else if (buttonValue === '=') {
    try {
      const result = eval(currentValue);
      updateDisplay(result);
    } catch (error) {
      updateDisplay('Error');
    }
  } 
  
  else {
    updateDisplay(currentValue + buttonValue);
  }
}

const buttons = document.querySelectorAll('input[type="button"]');
buttons.forEach((button) => {
  button.addEventListener('click', handleButtonClick);
  
});