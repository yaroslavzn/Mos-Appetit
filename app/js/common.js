$(document).ready(function(){
// Tabs
  $('.cook__link').on('click', function(e){

    e.preventDefault();

    var item = $(this).closest('.cook__item'),
        contentItem = $('.cook__content-item'),
        itemPosition = item.index();

    contentItem.eq(itemPosition)
      .addClass('cook__content-item--active')
      .siblings()
      .removeClass('cook__content-item--active');

    item.addClass('cook__item--active')
      .siblings()
      .removeClass('cook__item--active');
  });

// Slide Menu

  var menuBtn = $('.burger');
  var menu = $('.nav__list');

  menuBtn.on('click', function() {
    menu.toggleClass('nav__list--active');
    menuBtn.toggleClass('burger--active');
  });

//  Popup

    var popupCloseBtn = $('.close-btn');
    var popupOpenBtn = $('.open-btn');
    var popup = $('.popup-over');


    popupCloseBtn.on('click', function (e) {
        e.preventDefault();
        popup.removeClass('popup-over--active');
    })

    popupOpenBtn.on('click', function (e) {
        e.preventDefault();
        popup.addClass('popup-over--active');
    })
});
