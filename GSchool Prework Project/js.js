function fadedOut() {
	$('.hidden-start').fadeOut(50);
};

$(document).ready(function() {

// FADEOUT HIDDEN ELEMENTS
window.setTimeout('fadedOut();', 50);

	// NAVIGATION AND NAVICON STYLING AND ANIMATIONS

	// NAVICON STYLING AND ANIMATION

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
	// $(this).promise().done(function() {
	// 	$(this).addClass('faded');
	//})
})

// THINGS ARE WORKING OP TO THIS POINT

// SCROLLING ANIMATION

	$('section').height($(window).height());
	$('section').first().addClass('active');

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
			}
		});


});
