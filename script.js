let nav = document.querySelector('.navbar');
let btnmore = document.getElementById('seeAbout');
$('#seeAbout').click(function () {
  $('#more').toggleClass('d-none');
  if ($('#more').hasClass('d-none')) btnmore.innerHTML = 'Read More';
  else btnmore.innerHTML = 'Less More';
});
$(document).ready(function () {
  $(window).scroll(function () {
    var position = $(window).scrollTop();
    var widthwindow = $(window).width();

    if (widthwindow >= 1200) {
      if (position <= 600) {
        $('#nav').addClass('d-none');
      } else if (position > 600) {
        $('#nav').removeClass('d-none');
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
      } else if (position > 450) {
        $('#nav').removeClass('d-none');
      }
      $('#info1')
        .removeClass('col-xl-7 col-lg-7 col-md-7 col-sm-7')
        .addClass('col-xl-12 col-lg-12 col-md-12 col-sm-12');
      $('#info2')
        .removeClass('col-xl-5 col-lg-5 col-md-5 col-sm-5')
        .addClass('col-xl-12 col-lg-12 col-md-12 col-sm-12');
    } else if (widthwindow >= 768) {
      if (position <= 380) {
        $('#nav').addClass('d-none');
      } else if (position > 380) {
        $('#nav').removeClass('d-none');
      }
    } else if (widthwindow >= 576) {
      if (position <= 300) {
        $('#nav').addClass('d-none');
      } else if (position > 300) {
        $('#nav').removeClass('d-none');
      }
      $('#info1')
        .removeClass('col-xl-7 col-lg-7 col-md-7 col-sm-7')
        .addClass('col-xl-12 col-lg-12 col-md-12 col-sm-12');
      $('#info2')
        .removeClass('col-xl-5 col-lg-5 col-md-5 col-sm-5')
        .addClass('col-xl-12 col-lg-12 col-md-12 col-sm-12');
    } else if (widthwindow < 576) {
      if (position <= 250) {
        $('#nav').addClass('d-none');
      } else if (position > 250) {
        $('#nav').removeClass('d-none');
      }
    }
  });
});
function backTotop() {
  window.scroll(0, 0);
}

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
