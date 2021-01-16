// Popup 1 - Left Popup

jQuery(document).ready(function ($) {
  //open popup
  $('.cd-popup-trigger').on('click', function (event) {
    event.preventDefault();
    $('.cd-popup').addClass('is-visible');
    document.getElementById("nav").style.visibility = "hidden";
  });

  //close popup
  $('.cd-popup').on('click', function (event) {
    if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
      document.getElementById("nav").style.visibility = "visible";
    }
  });
  //close popup when clicking the esc keyboard button
  $(document).keyup(function (event) {
    if (event.which == '27') {
      $('.cd-popup').removeClass('is-visible');
      document.getElementById("nav").style.visibility = "visible";
    }
  });
});


// Popup 2 - Right Popup

jQuery(document).ready(function ($) {
  //open popup
  $('.cd-popup-trigger2').on('click', function (event) {
    event.preventDefault();
    $('.cd-popup2').addClass('is-visible2');
    document.getElementById("nav").style.visibility = "hidden";
  });

  //close popup
  $('.cd-popup2').on('click', function (event) {
    if ($(event.target).is('.cd-popup-close2') || $(event.target).is('.cd-popup2')) {
      event.preventDefault();
      $(this).removeClass('is-visible2');
      document.getElementById("nav").style.visibility = "visible";
    }
  });
  //close popup when clicking the esc keyboard button
  $(document).keyup(function (event) {
    if (event.which == '27') {
      $('.cd-popup2').removeClass('is-visible2');
      document.getElementById("nav").style.visibility = "visible";
    }
  });
});