// ------------------------------------------------------------
//  modal window
// ------------------------------------------------------------

// all/gallery.html PHOTO GALLERY
(function() {
  var modal = $('#js-gallery-modal');
  var slider = $('#js_gallerySlider').slick({
    autoplay: false,
    speed: 300,
    fade: true,
    arrows: true,
  });

  $('.galleryList__item').on('click', function() {
    var get = $(this).data('gallery-num');
    var num = parseInt(get, 10);
    modal.fadeIn();
    slider.slick('slickGoTo', num);
    slider.slick('setPosition');
  });

  $('.modal__close').on('click', function() {
    modal.fadeOut();
  });
})();  

