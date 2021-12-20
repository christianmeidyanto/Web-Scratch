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
