$(document).ready(function() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
	/*$(window).each(function () {
		alert("Hello World!");
	});*/
>>>>>>> parent of 94bd2e1... 10/16 Summary

// FADEOUT HIDDEN ELEMENTS
window.setTimeout('fadedOut();', 50);

<<<<<<< HEAD
=======
	/*$(window).each(function () {
		alert("Hello World!");
	});*/
window.setTimeout('fadedOut();', 50);

<<<<<<< HEAD
	//
	//
=======
>>>>>>> reverted-testing-branch
	// $('next').on('click', function () {
	// 	$('html, body').animate({scrollTop:(this).parent().next().offset().top}, 'slow');
	// })

>>>>>>> parent of cac2a0c... Merge Branch
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

	$('html, body').stop().animate({
		'scrollTop': $target.offset().top
	}, 500, 'swing', function () {
		window.location.hash = target;
	});
});

	// GRAYSCALE ON HOVER

	$('.anchor-button').hover(function () {
		$('a').closest('section').find('.background-container').addClass('grayscale-blur');
	}, function () {
		$('a').closest('section').find('.background-container').removeClass('grayscale-blur');
	});

<<<<<<< HEAD
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

<<<<<<< HEAD
// THINGS ARE WORKING OP TO THIS POINT
=======
	$('section').height($(window).height());
	$('section').first().addClass('active');
>>>>>>> parent of 94bd2e1... 10/16 Summary

	/*$(window).closest('section').addClass('active').siblings().removeClass('active');*/

<<<<<<< HEAD
=======
>>>>>>> parent of cac2a0c... Merge Branch
	$('section').height($(window).height());
	$('section').first().addClass('active');

// SCROLLING ANIMATION
	var scrollTimer = null;
	var lastScroll = 0;

	$(document).on('mousewheel DOMMouseScroll', function (event) {
		event.preventDefault();

		var minScrollTime = 100;
		var now = new Date().getTime();

<<<<<<< HEAD
	// $(document).bind('mousewheel DOMMouseScroll', function (event) {
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
	// 				queue: false;
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
<<<<<<< HEAD

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


=======
>>>>>>> parent of cac2a0c... Merge Branch
=======
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
>>>>>>> reverted-testing-branch
});
