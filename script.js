let nav = document.querySelector('.navbar');
let btnmore = document.getElementById('seeAbout');
let mybutton = document.getElementById('btn-back-to-top');

// See More Button About
$('#seeAbout').click(function () {
  $('#more').toggleClass('d-none');
  if ($('#more').hasClass('d-none')) btnmore.innerHTML = 'Read More';
  else btnmore.innerHTML = 'Less More';
});

// Custom Scale CSS when Scrolling
$(document).ready(function () {
  $(window).scroll(function () {
    var position = $(window).scrollTop();
    var widthwindow = $(window).width();

    if (widthwindow >= 1200) {
      if (position <= 500) {
        $('#nav').addClass('d-none');
        mybutton.style.display = 'none';
      } else if (position > 500) {
        $('#nav').removeClass('d-none');
      } else if (position > 900) {
        $('.owl-carousel').animated({ opacity: '0.4' }, 'slow');
        $('.owl-carousel').animated({ opacity: '0.8' }, 'slow');
        $('.owl-carousel').fadeIn(10000);
        mybutton.style.display = 'block';
      }
      $('#info1')
        .removeClass('col-xl-12 col-lg-12 col-md-12 col-sm-12')
        .addClass('col-xl-7 col-lg-7 col-md-7 col-sm-7');
      $('#info2')
        .removeClass('col-xl-12 col-lg-12 col-md-12 col-sm-12')
        .addClass('col-xl-5 col-lg-5 col-md-5 col-sm-5');

      $('#info2').css('margin-top', '0px');
    } else if (widthwindow >= 992) {
      if (position <= 450) {
        $('#nav').addClass('d-none');
        mybutton.style.display = 'none';
      } else if (position > 450) {
        $('#nav').removeClass('d-none');
        mybutton.style.display = 'block';
      }
      $('#info1')
        .removeClass('col-xl-7 col-lg-7 col-md-7 col-sm-7')
        .addClass('col-xl-12 col-lg-12 col-md-12 col-sm-12');
      $('#info2')
        .removeClass('col-xl-5 col-lg-5 col-md-5 col-sm-5')
        .addClass('col-xl-12 col-lg-12 col-md-12 col-sm-12');
      $('#info2').css('margin-top', '0px');
    } else if (widthwindow >= 768) {
      if (position <= 250) {
        $('#nav').addClass('d-none');
        mybutton.style.display = 'none';
      } else if (position > 250) {
        $('#nav').removeClass('d-none');
        mybutton.style.display = 'block';
      }
      $('#info1')
        .removeClass('col-xl-7 col-lg-7 col-md-7 col-sm-7')
        .addClass('col-xl-6 col-lg-6 col-md-6 col-sm-6');
      $('#info2')
        .removeClass('col-xl-5 col-lg-5 col-md-5 col-sm-5')
        .addClass('col-xl-6 col-lg-6 col-md-6 col-sm-6');
      $('#info2').css('margin-top', '-30px');
    } else if (widthwindow >= 576) {
      $('.card-img-top').css('width', '100px');
      if (position <= 180) {
        $('#nav').addClass('d-none');
        mybutton.style.display = 'none';
      } else if (position > 180) {
        $('#nav').removeClass('d-none');
        mybutton.style.display = 'block';
      }
      $('#info1')
        .removeClass('col-xl-7 col-lg-7 col-md-7 col-sm-7')
        .addClass('col-xl-12 col-lg-12 col-md-12 col-sm-12');
      $('#info2')
        .removeClass('col-xl-5 col-lg-5 col-md-5 col-sm-5')
        .addClass('col-xl-12 col-lg-12 col-md-12 col-sm-12');
      $('#info2').css('margin-top', '0px');
      $('#info2').css('margin-top', '0');
    } else if (widthwindow < 576) {
      $('.card-img-top').css('width', '100%');
      $('.card-product').css('width', '100%');
      $('.card-title').css('font-size', '15px');
      if (position <= 180) {
        $('#nav').addClass('d-none');
        mybutton.style.display = 'none';
      } else if (position > 180) {
        $('#nav').removeClass('d-none');
        mybutton.style.display = 'block';
      }
    }
  });
});

// Back To Top
function backTotop() {
  window.scroll(0, 0);
}

$(document).ready(function () {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    lazyLoad: true,
    center: true,
    mouseDrag: true,
    stopOnHover: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsiveClass: true,
    navText: [
      "<div class='nav-button owl-prev'>‹</div>",
      "<div class='nav-button owl-next'>›</div>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  play();
});

function play() {
  owl.trigger('play.owl.autoplay', [1000]);
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 360 ||
    document.documentElement.scrollTop > 360
  ) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
