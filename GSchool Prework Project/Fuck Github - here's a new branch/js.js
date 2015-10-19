

// alert("preload");
$(document).ready(function() {
// alert("Initializing");

$('.content-fill').hide();
$('.sub-button').hide();
$('.hidden-start').hide();
// FOR SCROLLING CODE
$('section').first().addClass('active');



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
	$('.bottom-list-past').toggle(200);
})

$('#road-icon').on('click', function () {
	$('.bottom-list-future').toggle(200);
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
		// target.closest('section').addClass('active')
		// 													.siblings().removeClass('active');
	});
});

// PAGE SCROLL CODE

var scrollTimer = null;
var lastScrollFireTime = 0;

$(document).on('mousewheel DOMMouseScroll', function (event) {
	event.preventDefault();

	var minScrollTime = 75;
	var now = new Date().getTime();
	var active = $('section.active');
	var delta = event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0 ? 1 : -1;
	if (scrollTimer === null) {
		if ((now - lastScrollFireTime) > (minScrollTime)) {
				if(delta < 0) {
					next = active.next();
						if (next.length) {
							$('.grayscale-blur').removeClass('grayscale-blur');
							$('html, body').animate({
								scrollTop: next.offset().top
							},500, function () {

									});
									next.addClass('active')
											.siblings().removeClass('active');
							} else {
								next = null;
								return;
							}
						} else if (delta > 0) {
							prev = active.prev();
							if (prev.length) {
								$('.grayscale-blur').removeClass('grayscale-blur');
								$('html, body').animate({
									scrollTop: prev.offset().top
								}, 500, function () {

								});
								prev.addClass('active')
									.siblings().removeClass('active');
							} else {
								prev = null;
								return;
							}

						}
					lastScrollFireTime = now;
					}
					scrollTimer = setTimeout(function() {
						scrollTimer = null;
						lastScrollFireTime = new Date().getTime();
					}, minScrollTime);
				}

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
		} else if ($(this).is('#galvanize-button')) {
			icon.toggleClass('button-gray');
		} else if ($(this).is('#career-button')) {
			icon.toggleClass('button-peru');
		} else if ($(this).is('#future-button')) {
			icon.toggleClass('button-orangered');
		}	else if ($(this).is('#twitter, #linkedin')) {
			icon.toggleClass('button-blue');
		} else if ($(this).is('#fishing-button')) {
			icon.toggleClass('button-red');
		} else if ($(this).is('#brewing-button')) {
			icon.toggleClass('button-blue');
		} else if ($(this).is('#brewery-button')) {
			icon.toggleClass('button-peru');
		} else if ($(this).is('#colorado-button')) {
			icon.toggleClass('button-orangered');
		} else if ($(this).is('#github')) {
			$(this).toggleClass('contact-button-white');
			icon.toggleClass('github-transition');
		}
	});

	$('.page-button').on('click', function () {
		$(this).parent('section').addClass('grayscale-blur');

		var toggleContentWindow = function (elem) {
			$(elem).toggleClass('clicked-container');
			$(elem).find('a').toggleClass('clicked-icon');
			$(elem).find('.content-fill').toggle();
		};

		if ($(this).hasClass('sm-button') === false
		// && $(this).hasClass('clicked-container') === false
	){
			if ($(this).hasClass('front-button')) {
			// alert('front button!!');
			toggleContentWindow(this);

		} else if ($(this).hasClass('sub-button')) {
			$(this).siblings('.sub-button').fadeToggle();
			$(this).fadeToggle(function () {
			toggleContentWindow(this);
			$(this).fadeToggle();
		});
			// if ($(this).hasClass('clicked-container') === false) {
			// 	$(this).closest('section').find('.sub-button').fadeToggle();
			// 	$(this).queue(function () {
			// 		$(this).toggleClass('hidden-button');
			// 		$(this).toggleClass('hidden-button');
			// 		toggleContentWindow(this);
			// 		$(this).toggle();
			// 	})
			// } else if ($(this).hasClass('clicked-container')){
			// 		toggleContentWindow(this);
			// 		$(this).siblings('.sub-button').fadeToggle();
			// 		$(this).removeClass('clicked-container');
			// }
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



// alert('end');
});
