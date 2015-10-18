// alert("preload");
$(document).ready(function() {
// alert("Initializing");

$('.content-fill').hide();
$('.sub-button').hide();


$('.nav-icon')
	.on('click', function () {
		$(this).toggleClass('nav-icon-clicked');
		$('.navbar').toggleClass('navbar-shown');
		// $('.background-container').toggleClass('grayscale-blur');
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

 // NAV SUBLIST POPOUT

$('#map-icon').on('click', function () {
	$('.bottom-list-past').slideToggle(200);
})

$('#road-icon').on('click', function () {
	$('.bottom-list-future').slideToggle(200);
})

// LINK SCROLLING

$('a[href^="#"]').on('click', function (e) {
	e.preventDefault();
	var target = this.hash;
	var $target = $(target);
	if ($(this).parent('li').hasClass('nav-anchor')) {
		$('html, body').find('.grayscale-blur').removeClass('grayscale-blur');
	}

	$('html, body').stop().animate({
		'scrollTop': $target.offset().top
	}, 500, 'swing', function () {
		window.location.hash = target;
	});
});

	// GRAYSCALE ON HOVER

	$('.page-button').hover(function () {
		if ($(this).hasClass('faded') === false &&
			($(this).hasClass('sub-button') === false) &&
			($(this).find('a').hasClass('clicked-icon') === false)) {
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
		$(this).parent('section').addClass('grayscale-blur');
		var openContentWindow = function (elem) {
			$(elem).toggleClass('clicked-container');
			$(elem).find('a').toggleClass('clicked-icon');
			$(elem).find('.content-fill').toggle();
		}

		if ($(this).hasClass('sm-button') === false) {
			if ($(this).hasClass('front-button')) {
			// alert('front button!!');
			openContentWindow(this);

		} else if ($(this).hasClass('sub-button')) {
			var activeElem = $(this);
			$(this).siblings('.sub-button').fadeToggle();
			$(this).animate(400, function () {
			openContentWindow(this);
		});
		} else {
					$(this).animate( 400, function () {
						$(this).fadeOut('slow', function () {
							$(this).closest('section').find('.hidden-start').toggleClass('.hidden-start').fadeIn();
					})
					$(this).addClass('faded');
					$('a').closest('section').find('background-container').addClass('grayscale-blur');
					})
		}
	}
	});

var toggleFlex = function () {
	$(this).toggleClass('flex-row').toggleClass('flex-col');
};

// BUTTON SPECIFIC EVENTS

// THINGS ARE WORKING OP TO THIS POINT

	$('section').height($(window).height());
	$('section').first().addClass('active');

var scrollTimer = null;
var lastScrollFireTime = 0;

	$(document).on('mousewheel DOMMouseScroll', function (event) {
		event.preventDefault();

		var minScrollTime = 100;
		var now = new Date().getTime();
		var active = $('section.active');
		var delta = event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0 ? 1 : -1;
		if (scrollTimer === null) {
			if ((now - lastScrollFireTime) > (3 * minScrollTime)) {
					if(delta < 0) {
						next = active.next();
							if (next.length) {
								$('html, body').animate({
									scrollTop: next.offset().top
								},500, function () {

										});
										next.addClass('active')
												.siblings().removeClass('active');
								}
							}
						} else if (delta > 0) {
							prev = active.prev();
								if (prev.length) {
									$('html, body').animate({
										scrollTop: prev.offset().top
									}, 500, function () {

									});
									prev.addClass('active')
										.siblings().removeClass('active');
								}
								lastScrollFireTime = now;
							}

							scrollTimer = setTimeout(function() {
								scrollTimer = null;
								lastScrollFireTime = new Date().getTime();
							}, minScrollTime);
					}

		});

alert('end');
});
