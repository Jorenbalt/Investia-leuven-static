$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.header-content').css({
    'transform' : 'translate(0px, ' + scrollTop/3 + 'px)'
  })

  // Navbar
  if (scrollTop > 5) {
    navbarBackground();
  } else {
    if (!$('.navbar-button--link').hasClass('navbar-button--link-show')) {
      navbarNoBackground();
    }
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
    var href = $.attr(this, 'href');
    if (href.charAt(0) == '#') {
      event.preventDefault();
      $('.navbar-button--link').each(function() {
        if ($(this).hasClass('navbar-button--link-show')) {
          $(this).removeClass('navbar-button--link-show');
        }
      });
      $('html, body').animate({
              scrollTop: $('[name="' + href.substr(1) + '"]').offset().top
          }, 500, function() {
          window.location.hash = '';
        });
      return false;
    }
});

// FORM

$("#sendMessage").on("click", function() {
    message = $("#contactform").serialize();
    $.ajax({
        url: "//formspree.io/rikbauwens1@gmail.com",
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    alert('Thanks for the email, we\'ll be in touch promptly.');
    return false;
});

// NAVIGATION BAR

function navigation() {
  navbarBackground();
  $('.navbar-button--link').each(function() {
    if ($(this).hasClass('navbar-button--link-show')) {
      $(this).removeClass('navbar-button--link-show');
    } else {
      $(this).addClass('navbar-button--link-show');
    }
  })
}

function navbarBackground() {
  $('.navbar').addClass('navbar--background')
  $('.navbar-button').addClass('navbar-button--background');
  $('.navbar__logo').removeClass('navbar__logo--hidden');
}

function navbarNoBackground() {
  $('.navbar').removeClass('navbar--background')
  $('.navbar-button').removeClass('navbar-button--background');
  $('.navbar__logo').addClass('navbar__logo--hidden');
}
