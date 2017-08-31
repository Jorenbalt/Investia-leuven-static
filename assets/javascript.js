$(window).scroll(function() {
  var scroll = $(this).scrollTop();

  $('.header-content').css({
    'transform' : 'translate(0px, ' + scroll/3 + 'px)'
  })

  if (scroll > 5) {
    $('.navbar').addClass('navbar--background')
    $('.navbar-button').addClass('navbar-button--background');
    $('.navbar__logo').removeClass('navbar__logo--hidden');
  } else {
    $('.navbar').removeClass('navbar--background')
    $('.navbar-button').removeClass('navbar-button--background');
    $('.navbar__logo').addClass('navbar__logo--hidden');
  }
})

// SMOOTH SCROLL

$(document).on('click', 'a', function(event){
    event.preventDefault();
    var href = $.attr(this, 'href');
    $('html, body').animate({
            scrollTop: $('[name="' + href.substr(1) + '"]').offset().top
        }, 500, function() {
        window.location.hash = '';
      });
    return false;
});
