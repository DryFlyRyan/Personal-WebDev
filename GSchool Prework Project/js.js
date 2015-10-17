function fadedOut() {
	$('.hidden-start').fadeOut(50);
};

$(document).ready(function() {
	/*$(window).each(function () {
		alert("Hello World!");
	});*/
window.setTimeout('fadedOut();', 50);



	// $('next').on('click', function () {
	// 	$('html, body').animate({scrollTop:(this).parent().next().offset().top}, 'slow');
	// })

	// NAVIGATION AND NAVICON STYLING AND ANIMATIONS

$('.nav-icon')
	.on('click', function () {
		$(this).toggleClass('nav-icon-clicked');
		$('.navbar').toggleClass('navbar-shown');
		$(this).removeClass('nav-icon-hover');
	})
	.on('mouseenter', function () {
		if ($(this).hasClass('nav-icon-clicked') === false) {
			$(this).addClass('nav-icon-hover');
		}
	})
	.on('mouseleave', function () {
		$(this).removeClass('nav-icon-hover');
	})

$('#map-icon').on('click', function () {
	$('.bottom-list-past').slideToggle(200);
})


$('#road-icon').on('click', function () {
	$('.bottom-list-future').slideToggle(200);
})

$('a[href^="#"]').on('click', function (e) {
	e.preventDefault();

	var target = this.hash;
	var $target = $(target);

	$('html, body').stop().animate({
		'scrollTop': $target.offset().top
	}, 500, 'swing', function () {
		window.location.hash = target;
	});
});

	// GRAYSCALE ON HOVER + BUTTON STYLING AND FADES

	$('.page-button').hover(function () {
		if ($(this).hasClass('faded') === false) {
			$('a').closest('section').find('.background-container').toggleClass('grayscale-blur');
		}
		var icon = $(this).find('i');
		if ($(this).is('#home-button')) {
			icon.toggleClass('button-chocolate');
		} else if ($(this).is('#binoculars-button')) {
			icon.toggleClass('button-red');
		} else if ($(this).is('#paw-button')) {
			icon.toggleClass('button-gold');
		} else if ($(this).is('#tree-button')) {
			icon.toggleClass('button-green');
		} else if ($(this).is('#twitter, #linkedin')) {
			icon.toggleClass('button-blue');
		} else if ($(this).is('#github')) {
			$(this).toggleClass('contact-button-white');
			icon.toggleClass('github-transition');
		}
	});

$('.page-button').on('click', function () {
	$('a').closest('section').find('background-container').addClass('grayscale-blur');
	$(this).animate( 400, function () {
		$(this).fadeOut('slow', function () {
			$(this).closest('section').find('.hidden-start').toggleClass('.hidden-start').fadeIn();
		})
		$(this).addClass('faded');
		$('a').closest('section').find('background-container').addClass('grayscale-blur');

	})
// THIS IS BEING TROUBLESOME
	$(this).promise().done(function() {
		$(this).addClass('faded');
	})
})

	$('section').height($(window).height());
	$('section').first().addClass('active');

// SCROLLING ANIMATION
	var scrollTimer = null;
	var lastScroll = 0;

	$(document).on('mousewheel DOMMouseScroll', function (event) {
		event.preventDefault();

		var minScrollTime = 100;
		var now = new Date().getTime();

		var active = $('section.active');
		var delta = event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0 ? 1 : -1;

		if (!scrollTimer) {
			if((now - lastScroll) > (minScrollTime * 3)) {
				lastScroll = now;
					if(delta < 0) {
						next = active.next();
							if (next.length) {
								var time = setTimeout(function () {
									$('html, body').animate({
										scrollTop: next.offset().top
									},400);

									next.addClass('active')
										.siblings().removeClass('active');
										clearTimeout(time);

									}, 500);

								}
					} else if (delta > 0) {
						prev = active.prev();
							if (prev.length) {
								var time = setTimeout(function () {
									$('html, body').animate({
										scrollTop: prev.offset().top
									},400);

									prev.addClass('active')
									.siblings().removeClass('active');
									clearTimeout(time);

									}, 500);
								}
							}
						}
			scrollTimer = setTimeout(function() {
			scrollTimer = null;
			lastScroll = new Date().getTime();
			}, minScrollTime);

			}
	});
});
