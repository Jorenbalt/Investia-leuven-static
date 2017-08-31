$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.header-content').css({
    'transform' : 'translate(0px, ' + scrollTop/3 + 'px)'
  })

  // Navbar
  if (scrollTop > 5) {
    $('.navbar').addClass('navbar--background')
    $('.navbar-button').addClass('navbar-button--background');
    $('.navbar__logo').removeClass('navbar__logo--hidden');
  } else {
    $('.navbar').removeClass('navbar--background')
    $('.navbar-button').removeClass('navbar-button--background');
    $('.navbar__logo').addClass('navbar__logo--hidden');
  }

  // Fade ins
  $('.fade-in').each( function(i){
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
          $(this).animate({'opacity':'1'},500);
      }
  });

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
