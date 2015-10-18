<<<<<<< HEAD
// alert("preload");

$(document).ready(function() {

// alert("Initializing");

$('.content-fill').hide();
$('.sub-button').hide();
=======
$(document).ready(function() {
<<<<<<< HEAD
=======
	/*$(window).each(function () {
		alert("Hello World!");
	});*/
>>>>>>> parent of 94bd2e1... 10/16 Summary

// FADEOUT HIDDEN ELEMENTS
window.setTimeout('fadedOut();', 50);
>>>>>>> origin/master

<<<<<<< HEAD
	// NAVIGATION AND NAVICON STYLING AND ANIMATIONS

	// NAVICON STYLING AND ANIMATION

=======
>>>>>>> parent of 94bd2e1... 10/16 Summary
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

<<<<<<< HEAD
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

// $('.page-button').find('a').on('click', function () {
// // 	if ($(this).hasClass('sm-button') === false) {
// 		$('a').closest('section').find('background-container').addClass('grayscale-blur');
// 		if ($(this).hasClass('front-button') === false) {
// 			$(this).animate( 400, function () {
// 				$(this).fadeOut('slow', function () {
// 					$(this).closest('section').find('.hidden-start').toggleClass('.hidden-start').fadeIn();
// 			})
// 			$(this).addClass('faded');
// 			$('a').closest('section').find('background-container').addClass('grayscale-blur');
// 			})
// 			}
// 		else if ($(this).hasClass('front-button')) {
// 			$(this).toggleFlex()
// 			$(this).toggleClass('clicked-container');
// 			$(this).animate(function() {
// 				$(this).find('a')toggleClass('clicked-icon');
// 				$(this).find('.content-fill').show();
// 			}, 400);
// 		}
// });

=======
	$('.anchor-button').hover(function () {
		$('a').closest('section').find('.background-container').addClass('grayscale-blur');
	}, function () {
		$('a').closest('section').find('.background-container').removeClass('grayscale-blur');
	});

<<<<<<< HEAD
>>>>>>> origin/master
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

<<<<<<< HEAD



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
=======
	})
// THIS IS BEING TROUBLESOME
	// $(this).promise().done(function() {
	// 	$(this).addClass('faded');
	//})
})

// THINGS ARE WORKING OP TO THIS POINT
=======
	$('section').height($(window).height());
	$('section').first().addClass('active');
>>>>>>> parent of 94bd2e1... 10/16 Summary
>>>>>>> origin/master

	/*$(window).closest('section').addClass('active').siblings().removeClass('active');*/

<<<<<<< HEAD
	$('section').height($(window).height());
	$('section').first().addClass('active');

	$(document).on('mousewheel DOMMouseScroll', function (event) {
		event.preventDefault();

		var minScrollTime = 100;
		var now = new Date().getTime();
=======
<<<<<<< HEAD
	$('section').height($(window).height());
	$('section').first().addClass('active');
>>>>>>> origin/master

	// $(document).on('mousewheel DOMMouseScroll', function (event) {
	// 	event.preventDefault();
	// 	var active = $('section.active');
	// 	var delta = event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0 ? 1 : -1;
	// 	if(delta < 0) {
	// 		next = active.next();
	// 		if (next.length) {
	//
	// 			$('html, body').animate({
	// 				scrollTop: next.offset().top
	// 			},{
	// 				queue: 1;
	// 				duration: 500;
	// 				complete: function () {
	// 					next.addClass('active')
	// 						.siblings().removeClass('active');
	// 				}
	// 			});
	// 		}
	// 	} else if (delta > 0) {
	// 		prev = active.prev();
	// 			if (prev.length) {
	//
	// 			$('html, body').animate({
	// 				scrollTop: next.offset().top
	// 			},{
	// 				queue: false;
	// 				duration: 500;
	// 				complete: function () {
	// 					next.addClass('active')
	// 						.siblings().removeClass('active');
	// 					}
	// 				});
	// 			}
	// 		}
	// 	})

		$(document).bind('mousewheel DOMMouseScroll', function (event) {
			event.preventDefault(); // This works
			var active = $('section.active');
			var delta = event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0 ? 1 : -1;
			/*alert(event.originalEvent.weelDelta);*/
			if(delta < 0) {
				next = active.next();
				if (next.length) {
					active.find('background-container').removeClass('grayscale-blur')
								.siblings().find('background-container').removeClass('grayscale-blur');
					var time = setTimeout(function () {
						$('html, body').animate({
							scrollTop: next.offset().top
						}, 400);
					next.addClass('active')
						.siblings().removeClass('active');
						clearTimeout(time);
					}, 150);
				}
			} else if (delta > 0) {
				prev = active.prev();
				if (prev.length) {
					active.find('background-container').removeClass('grayscale-blur')
								.siblings().find('background-container').removeClass('grayscale-blur');
					var time = setTimeout(function () {
						$('html, body').animate({
							scrollTop: prev.offset().top
						}, 400);

					prev.addClass('active')
						.siblings().removeClass('active');

						clearTimeout(time);
					}, 150);
				}
=======
	$(document).bind('mousewheel DOMMouseScroll', function (event) {
		event.preventDefault(); // This works
		var active = $('section.active');
		var delta = event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0 ? 1 : -1;
		/*alert(event.originalEvent.weelDelta);*/
		if(delta < 0) {
			next = active.next();
			if (next.length) {
				var time = setTimeout(function () {
					$('html, body').animate({
						scrollTop: next.offset().top
					}, 400);
				next.addClass('active')
					.siblings().removeClass('active');
					clearTimeout(time);
				}, 150);
			}
		} else if (delta > 0) {
			prev = active.prev();
			if (prev.length) {
				var time = setTimeout(function () {
					$('html, body').animate({
						scrollTop: prev.offset().top
					}, 400);

				prev.addClass('active')
					.siblings().removeClass('active');

					clearTimeout(time);
				}, 150);
>>>>>>> parent of 94bd2e1... 10/16 Summary
			}
		});


<<<<<<< HEAD
			}
	});
	// alert('end');
=======
>>>>>>> origin/master
});
