class MathOperations {
   constructor() {
      this.currentValue = '';
      this.previousValue = '';
      this.operator = '';
   }

   appendNumber(number) {
      this.currentValue += number;
   }

   setOperator(operator) {
      // Set operator and perform calculation if necessary
      if (this.operator !== '') {
         this.calculate();
      }
      this.operator = operator;
      this.previousValue = this.currentValue;
      this.currentValue = '';
   }

   calculate() {
      let result;
      const prev = parseFloat(this.previousValue);
      const current = parseFloat(this.currentValue);

      if (isNaN(prev) || isNaN(current)) return;

      switch (this.operator) {
         case '+':
            result = prev + current;
            break;
         case '-':
            result = prev - current;
            break;
         case 'x':
            result = prev * current;
            break;
         case '/':
            if (current === 0) {
               this.currentValue = 'error';
               this.operator = '';
               this.previousValue = '';
               return;
            }
            result = prev / current;
            break;
         default:
            return;
      }
      this.currentValue = Math.floor(result * 1000) / 1000;
      this.operator = '';
      this.previousValue = '';
   }

   clear() {
      this.currentValue = '';
      this.previousValue = '';
      this.operator = '';
   }

   getCurrentValue() {
      return this.currentValue;
   }

   getPreviousValue() {
      return this.previousValue;
   }

   getOperator() {
      return this.operator;
   }
}

export default MathOperations;
