$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".menu-mobile").addClass("menu-mobile-show");
  } else {
    $(".menu-mobile").removeClass("menu-mobile-show");
  }
});

$('.menu-mobile').click(function () {
  $(".menu-hide").fadeIn();
});

$('.times').click(function () {
  $(".menu-hide").fadeOut();
});

$('.header-pc').hover(function () {
  $(this).addClass("slide");
  $("main").addClass("main-slide");
  $(".menu-pc").fadeOut();
  }, function () {
  $(this).removeClass("slide");
  $("main").removeClass("main-slide");
  $(".menu-pc").fadeIn();
});

$(window).scroll(function () {
  $('.box-service').each(function () {
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100 ) {
      $(this).addClass('box-main');
    }
  });
});

$(window).scroll(function () {
  $('.service-item').each(function () {
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 300) {
      $(this).addClass('service-item-show');
    }
  });
});

$(window).scroll(function () {
  $('.box-skill').each(function () {
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100) {
      $(this).addClass('box-main');
    }
  });
});

$('.service-item').click(function () {
  $(this).toggleClass("service-item-action");
});

$(window).scroll(function () {
  $('.skill-item').each(function () {
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 300) {
      $(this).addClass('skill-item-show');
    }
  });
});


$(window).scroll(function () {
  $('.box-works').each(function () {
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100) {
      $(this).addClass('box-main');
    }
  });
});

$(window).scroll(function () {
  $('.box-contact').each(function () {
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100) {
      $(this).addClass('box-main');
    }
  });
});
