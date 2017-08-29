$(window).scroll(function() {
  var scroll = $(this).scrollTop();

  $('.header-content').css({
    'transform' : 'translate(0px, ' + scroll/3 + 'px)'
  })

  if (scroll > 5) {
    $('.navbar').addClass('navbar--background')
    $('.navbar-button').addClass('navbar-button--background');
  } else {
    $('.navbar').removeClass('navbar--background')
    $('.navbar-button').removeClass('navbar-button--background');
  }
})
