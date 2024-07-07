import { changeTheme } from './src/assets/scripts/modules/inputs.js';
import {
   addNumberButtonListeners,
   addOperatorButtonListeners,
} from './src/assets/scripts/modules/inputs.js';

document.addEventListener('DOMContentLoaded', (e) => {
   changeTheme();
   document.getElementById('theme1').click();

   addNumberButtonListeners();
   addOperatorButtonListeners();
});
