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

// SMOOTH SCROLL

$(document).on('click', 'a', function(event){
    event.preventDefault();
    $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 500);
    return false;
});
