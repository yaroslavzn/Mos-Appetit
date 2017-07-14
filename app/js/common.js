$(document).ready(function(){

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

});
