$(document).ready(function() {
	/*$(window).each(function () {
		alert("Hello World!");
	});*/


	$('next').on('click', function () {
		$('html, body').animate({scrollTop:(this).parent().next().offset().top}, 'slow');
	})

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
