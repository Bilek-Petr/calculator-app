import { changeTheme } from './modules/themes';
import { addNumberButtonListeners, addOperatorButtonListeners } from './modules/inputs';

document.addEventListener('DOMContentLoaded', (e) => {
   changeTheme();
   document.getElementById('theme1').click();
   
   addNumberButtonListeners();
   addOperatorButtonListeners();
});
