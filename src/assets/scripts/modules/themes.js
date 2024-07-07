const themeButtons = document.querySelectorAll('input[name="theme"]');

export const changeTheme = () => {
   themeButtons.forEach((button) => {
      button.addEventListener('change', (e) => {
         document.body.classList.remove('theme1', 'theme2', 'theme3');
         document.body.classList.add(e.target.id);
      });
   });
};
