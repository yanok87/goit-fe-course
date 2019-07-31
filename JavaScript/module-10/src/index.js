import './styles.css';

import menuData from "./data/menu.json";
import menuTemplate from "./templates/menu.hbs";

const menuList = {
  menu_ul: document.querySelector('.menu')
};

function createMenu(menuData) {
  const readyMenu = menuData.map(menuItem => menuTemplate(menuItem)).join("");

  menuList.menu_ul.insertAdjacentHTML("beforeend", readyMenu);
}
createMenu(menuData);

//  =========== CHANGE THEME ======

const changeTheme = document.querySelector('#theme-switch-control');
const body = document.querySelector('body');
changeTheme.addEventListener('click', toggleTheme);

function toggleTheme(event) {
  if (event.target === changeTheme) {
    body.classList.toggle('dark-theme');
    saveTheme()
  }
}

function saveTheme() {
  if (changeTheme.checked) {
    localStorage.setItem('changeTheme', 'checked');
  } else {
    localStorage.setItem('changeTheme', 'unchecked');
  }
}

const isChecked = localStorage.getItem('changeTheme')

function reloadTheme() {
  if (isChecked === 'checked') {
    body.classList.add('dark-theme');
    changeTheme.checked = true;
  }
}

reloadTheme();
