const themeButtons = document.querySelectorAll('.theme-menu__button');

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    themeButtons.forEach((btn) => {
      btn.classList.remove('theme-menu__button-active');
      btn.removeAttribute('disabled');
    });
    if (
      [...button.classList].includes('theme-menu-button_type_light')
    ) {
      changeTheme('light');
    } else if (
      [...button.classList].includes('theme-menu-button_type_dark')
    ) {
      changeTheme('dark');
    } 
    button.classList.add('theme-menu__button-active');
    button.setAttribute('disabled', true);
  });
});

function changeTheme(theme) {
  document.body.className = 'page';
  document.body.classList.add(`theme_${theme}`);
  localStorage.setItem('theme', theme);
}

function initTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    changeTheme(theme);
    themeButtons.forEach((btn) => {
      btn.classList.remove('theme-menu__button-active');
      btn.removeAttribute('disabled');
    });
    document
      .querySelector(`.theme-menu-button_type_${theme}`)
      .classList.add('theme-menu__button-active');
    document
      .querySelector(`.theme-menu-button_type_${theme}`)
      .setAttribute('disabled', true);
  }
}

initTheme();