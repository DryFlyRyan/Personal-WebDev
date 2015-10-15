$(document).ready(function() {
	/*$(window).each(function () {
		alert("Hello World!");
	});*/

	$('next').on('click', function () {
		$('html, body').animate({scrollTop:(this).parent().next().offset().top}, 'slow');
	})

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

	// GRAYSCALE ON HOVER

	$('.anchor-button').hover(function () {
		$('a').closest('section').find('.background-container').addClass('grayscale-blur');
	}, function () {
		$('a').closest('section').find('.background-container').removeClass('grayscale-blur');
	});

	$('section').height($(window).height());
	$('section').first().addClass('active');

	/*$(window).closest('section').addClass('active').siblings().removeClass('active');*/

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
			}
		}
	});
});
