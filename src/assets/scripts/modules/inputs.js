import { updateDisplay, resetCurrentInput, resetAllInputs } from './inputUtils.js';
import MathOperations from './mathOperations.js';

const operatorButtons = document.querySelectorAll('.btn--operator');
const numberButtons = document.querySelectorAll('.btn--num');
const deleteButton = document.querySelector('.btn--delete');
const resetButton = document.querySelector('.btn--reset');
const resultButton = document.querySelector('.btn--result');

const mathOps = new MathOperations();
const maxInputLength = 10;

const handleNumberButtonClick = (button) => {
   const keyValue = button.textContent;
   // Check if the current input array already contains a decimal point
   if (
      keyValue === '.' &&
      (mathOps.getCurrentValue().includes('.') || mathOps.getCurrentValue().length === 0)
   ) {
      return; // Do nothing if a decimal point is already present
   }
   if (mathOps.getCurrentValue().length < maxInputLength) {
      mathOps.appendNumber(keyValue);
      updateDisplay(mathOps);
   }
};

const handleOperatorButtonClick = (e) => {
   const operator = e.target.textContent.trim();
   mathOps.setOperator(operator);
   updateDisplay(mathOps);
};

const handleResultButtonClick = () => {
   mathOps.calculate();
   updateDisplay(mathOps);
};

const deleteLastNumber = () => {
   const currentValue = mathOps.getCurrentValue();
   if (currentValue.length > 0) {
      mathOps.currentValue = currentValue.slice(0, -1);
      updateDisplay(mathOps);
   }
};

const addNumberButtonListeners = () => {
   numberButtons.forEach((button) => {
      button.addEventListener('click', () => handleNumberButtonClick(button));
   });
};

const addOperatorButtonListeners = () => {
   operatorButtons.forEach((button) => {
      button.addEventListener('click', handleOperatorButtonClick);
   });
};

resultButton.addEventListener('click', handleResultButtonClick);
deleteButton.addEventListener('click', deleteLastNumber);
resetButton.addEventListener('click', () => resetAllInputs(mathOps)); // Pass mathOps instance to resetAllInputs
export {
   addNumberButtonListeners,
   addOperatorButtonListeners,
   deleteLastNumber,
   resetAllInputs,
};
