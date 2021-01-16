var tl1 = gsap.timeline({})

tl1

  .from("#introtext", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: 'expo.out',
    delay: 0.5,
  })
  .from("#photo1", {
    opacity: 0,
    duration: 2,
    y: -140,
    ease: 'expo.out',
    delay: -1.5,
  })


  .from("#introsubdescription", {
    opacity: 0,
    duration: 2,
    x: 140,
    ease: 'expo.out',
    delay: -1.5,
  })


var tl2 = gsap.timeline({ repeat: -1, defaults: { duration: 2 } })

tl2

  .from('#photo2', {
    opacity: 0,
    delay: 5,
  })

  .to('#photo2', {
    opacity: 1,
  })

  .to('#photo2', {
    opacity: 0,
    delay: 5
  });

var tl9 = gsap.timeline({ defaults: { duration: 2 } })

tl9

  .from('#logo', {
    opacity: 0,
    duration: 2,
    x: 140,
    ease: 'expo.out',
    delay: 1,
  })

  .to('#logo', {
    opacity: 1,
    duration: 2,
    x: 0,
    ease: 'expo.out',
  });


// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
// Animations for the 3 links in the footer


var tl100 = gsap.timeline({ repeat: -1, paused: true, defaults: { duration: 2 } })

tl100

  .to('#linkedinsvg', {
    rotation: 360,
    ease: "linear",
  });

document.querySelector('#linkedinsvg').addEventListener('mouseenter', LinkedInRota);
function LinkedInRota() {
  tl100.play();
}
document.querySelector('#linkedinsvg').addEventListener('mouseleave', pauseLinkedInRota);
function pauseLinkedInRota() {
  tl100.pause();
}


var tl6 = gsap.timeline({ repeat: -1, paused: true, defaults: { duration: 2 } })

tl6

  .to('#phonesvg', {
    rotation: 360,
    ease: "linear",
  });

document.querySelector('#phonesvg').addEventListener('mouseenter', PhoneRota);
function PhoneRota() {
  tl6.play();
}
document.querySelector('#phonesvg').addEventListener('mouseleave', pausePhoneRota);
function pausePhoneRota() {
  tl6.pause();
}

var tl7 = gsap.timeline({ repeat: -1, paused: true, defaults: { duration: 2 } })

tl7

  .to('#emailsvg', {
    rotation: 360,
    ease: "linear",
  });

document.querySelector('#emailsvg').addEventListener('mouseenter', EmailRota);
function EmailRota() {
  tl7.play();
}
document.querySelector('#emailsvg').addEventListener('mouseleave', pauseEmailRota);
function pauseEmailRota() {
  tl7.pause();
}



// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
// Animations for the 'Skills' and'About' sections

var tl70 = gsap.timeline({ paused: true });

tl70

  .from('.RectanglesDivide', {
    y: "100%",
    duration: 1.5,
    opacity: 0,
    ease: 'Power4.easeOut',
    delay: 0.5,
    stagger: 0.1,
  });

var tl710 = gsap.timeline({ paused: true });

tl710

  .from('.LCBROW', {
    y: "100%",
    duration: 0.8,
    opacity: 0,
    ease: 'expo.out',
    delay: 1,
    stagger: 0.175,
  });

var tl719 = gsap.timeline({ paused: true });

tl719

  .from('.RCBROW', {
    y: "100%",
    duration: 0.8,
    opacity: 0,
    ease: 'expo.out',
    delay: 1,
    stagger: 0.175,
  });

$(document).ready(function () {
  $(window).scroll(function () {
    var scrollbottom = $(window).scrollTop();
    var winheight2 = $(document).height()

    if (((1.2 * (winheight2 / 5)) > scrollbottom) && ((0.2 * (winheight2 / 5)) < scrollbottom)) {
      tl70.play();
    } else if (((2.8 * (winheight2 / 5)) > scrollbottom) && ((1.2 * (winheight2 / 5)) < scrollbottom)) {
      tl710.play();
      tl719.play();
    } else {
      tl70.pause();
      tl710.pause();
    }
  })
});