let currentInput = '';
let operation = null;
let previousInput = '';
let computation;

function appendNumber(number) {
    currentInput += number; //concatenation of previous and current inputs based on the current input lol
    updateDisplay();
}
function setOperation(op) {
    if (currentInput === '') return; // Prevent setting operation without a number
    if (previousInput !== '') {
        calculate(); // Calculate if there's a previous input
    }
    operation = op;              // Set the operation
    previousInput = currentInput; // Save the current input as previous
    currentInput = '';            // Reset current input for next number input
}

function calculate() {
let computation;
const prev = parseFloat(previousInput);
const current = parseFloat(currentInput);

switch (operation) {
    case '+':
        computation = prev + current;
        break;
    case '-':
        computation = prev - current;
        break;
    case '*':
        computation = prev * current;
        break;
    case '/':
        computation = prev / current;
        break;
    default:
        return;
        
}
currentInput = computation.toString();
operation = null;  //resets operation before a new one is made
previousInput = '';
updateDisplay(); 
}


function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
}

console.log(computation);
function updateDisplay() {
    document.getElementById('display').value = currentInput;
}