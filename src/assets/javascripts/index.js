'use strict'

window.addEventListener('load', function() {

  // 関数の定義
  function openDrawer() {
    document.getElementsByClassName('l-header__drawerBar')[0].classList.toggle('js-active');
    document.getElementsByClassName('l-header__drawerBar')[1].classList.toggle('js-active');
    document.getElementsByClassName('l-header__drawerBar')[2].classList.toggle('js-active');
    document.getElementsByClassName('l-header__spMenu')[0].classList.toggle('js-active');
  }
  function closeDrawer() {
    document.getElementsByClassName('l-header__drawerBar')[0].classList.remove('js-active');
    document.getElementsByClassName('l-header__drawerBar')[1].classList.remove('js-active');
    document.getElementsByClassName('l-header__drawerBar')[2].classList.remove('js-active');
    document.getElementsByClassName('l-header__spMenu')[0].classList.add('js-active');
  }

  // 関数の実行
  window.openDrawer = openDrawer;
  window.closeDrawer = closeDrawer;

}, false);
