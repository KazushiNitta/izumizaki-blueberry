'use strict'

window.addEventListener('load', function() {

  // 関数の定義
  function toggleDrawer() {
    $('.l-header__drawerBar').toggleClass('js-active');
    $('.l-header__spMenu').toggleClass('js-active');
  }
  function closeDrawer() {
    $('.l-header__drawerBar').removeClass('js-active');
    $('.l-header__spMenu').addClass('js-active');
  }

  // クリックイベントの実行
  $('.l-header__drawerIcon').on('click', function() {
    toggleDrawer();
  });
  $('.l-header__spImageButtonLink').on('click', function() {
    closeDrawer();
  });
  $('.l-header__spMenuLink').on('click', function() {
    closeDrawer();
  });

}, false);
