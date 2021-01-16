
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll1 = $(window).scrollTop();
    var winheight1 = $(document).height()

    if (((1.8 * (winheight1 / 5)) > scroll1) && ((0.6 * (winheight1 / 5)) < scroll1)) {
      $("#homea").css("text-decoration", "none");
      $("#abouta").css("text-underline-position", "under");
      $("#abouta").css("text-decoration", "underline");
      $("#abouta").css("text-decoration-color", "red");
      $("#skillsa").css("text-decoration", "none");
      $("#projectsa").css("text-decoration", "none");
      $("#contactsa").css("text-decoration", "none");
    } else if (((3.3 * (winheight1 / 5)) > scroll1) && ((1.8 * (winheight1 / 5)) < scroll1)) {
      $("#homea").css("text-decoration", "none");
      $("#abouta").css("text-decoration", "none");
      $("#skillsa").css("text-underline-position", "under");
      $("#skillsa").css("text-decoration", "underline");
      $("#skillsa").css("text-decoration-color", "red");
      $("#projectsa").css("text-decoration", "none");
      $("#contactsa").css("text-decoration", "none");
    } else if (((3.9 * (winheight1 / 5)) > scroll1) && ((3.3 * (winheight1 / 5)) < scroll1)) {
      $("#homea").css("text-decoration", "none");
      $("#abouta").css("text-decoration", "none");
      $("#skillsa").css("text-decoration", "none");
      $("#projectsa").css("text-underline-position", "under");
      $("#projectsa").css("text-decoration", "underline");
      $("#projectsa").css("text-decoration-color", "red");
      $("#contactsa").css("text-decoration", "none");
    } else if (((5 * (winheight1 / 5)) > scroll1) && ((3.9 * (winheight1 / 5)) < scroll1)) {
      $("#homea").css("text-decoration", "none");
      $("#abouta").css("text-decoration", "none");
      $("#skillsa").css("text-decoration", "none");
      $("#projectsa").css("text-decoration", "none");
      $("#contactsa").css("text-underline-position", "under");
      $("#contactsa").css("text-decoration", "underline");
      $("#contactsa").css("text-decoration-color", "red");
    }
    else {
      $("#homea").css("text-underline-position", "under");
      $("#homea").css("text-decoration", "underline");
      $("#homea").css("text-decoration-color", "red");
      $("#abouta").css("text-decoration", "none");
      $("#skillsa").css("text-decoration", "none");
      $("#projectsa").css("text-decoration", "none");
      $("#contactsa").css("text-decoration", "none");
    }
  })
});