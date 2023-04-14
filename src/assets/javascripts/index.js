'use strict'

window.addEventListener('load', function() {
  function openDrawer() {
    document.getElementsByClassName('l-header__drawerBar')[0].classList.toggle('js-active');
    document.getElementsByClassName('l-header__drawerBar')[1].classList.toggle('js-active');
    document.getElementsByClassName('l-header__drawerBar')[2].classList.toggle('js-active');
    document.getElementsByClassName('l-header__spMenu')[0].classList.toggle('js-active');
  }

  window.openDrawer = openDrawer;

  // const scroll = window.Top;
  // console.log(scroll);
  // console.log('あ');

}, false);
