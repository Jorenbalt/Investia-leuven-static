$(window).scroll(function() {
  var scroll = $(this).scrollTop();

  $('.header-content').css({
    'transform' : 'translate(0px, ' + scroll/2 + 'px)'
  })

  if (scroll > 500) {
    $('.navbar').addClass('navbar--background')
  } else {
    $('.navbar').removeClass('navbar--background')
  }
})
