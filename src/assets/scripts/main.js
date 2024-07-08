import { changeTheme } from './modules/themes.js';
import {
   addNumberButtonListeners,
   addOperatorButtonListeners,
} from './modules/inputs.js';

document.addEventListener('DOMContentLoaded', (e) => {
   changeTheme();
   document.getElementById('theme1').click();

   addNumberButtonListeners();
   addOperatorButtonListeners();
});
