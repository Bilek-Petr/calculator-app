// inputUtils.js

const currentInputDisplay = document.querySelector('.user-input__current');
const previousInputDisplay = document.querySelector('.user-input__previous');

export const updateDisplay = (mathOps) => {
   // Update current and previous input displays
   currentInputDisplay.textContent = mathOps.getCurrentValue();
   previousInputDisplay.textContent = `${mathOps.getPreviousValue()} ${mathOps.getOperator()}`;
};

export const resetCurrentInput = (mathOps) => {
   mathOps.clear();
   updateDisplay(mathOps);
};

export const resetAllInputs = (mathOps) => {
   mathOps.clear();
   updateDisplay(mathOps);
};
