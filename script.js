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

// Image Zoom Lens
function imageZoom(imgID, resultID) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /*create lens:*/
  lens = document.createElement('DIV');
  lens.setAttribute('class', 'img-zoom-lens');
  /*insert lens:*/
  img.parentElement.insertBefore(lens, img);
  /*calculate the ratio between result DIV and lens:*/
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  /*set background properties for the result DIV:*/
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = img.width * cx + 'px ' + img.height * cy + 'px';
  /*execute a function when someone moves the cursor over the image, or the lens:*/
  lens.addEventListener('mousemove', moveLens);
  img.addEventListener('mousemove', moveLens);
  /*and also for touch screens:*/
  lens.addEventListener('touchmove', moveLens);
  img.addEventListener('touchmove', moveLens);
  function moveLens(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    /*calculate the position of the lens:*/
    x = pos.x - lens.offsetWidth / 2;
    y = pos.y - lens.offsetHeight / 2;
    /*prevent the lens from being positioned outside the image:*/
    if (x > img.width - lens.offsetWidth) {
      x = img.width - lens.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > img.height - lens.offsetHeight) {
      y = img.height - lens.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }
    /*set the position of the lens:*/
    lens.style.left = x + 'px';
    lens.style.top = y + 'px';
    /*display what the lens "sees":*/
    result.style.backgroundPosition = '-' + x * cx + 'px -' + y * cy + 'px';
  }
  function getCursorPos(e) {
    var a,
      x = 0,
      y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
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
