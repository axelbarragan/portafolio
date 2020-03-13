/*main.js*/
$(document).ready(function() {

    var scroll = new SmoothScroll('a[href*="#"]', {
    	speed: 900,
    	speedAsDuration: true,
    	offset: 0,
    	easing: 'easeOutQuad'
    });

	$('.nav-link').click(function(){
		console.log("clicked");
		$('.navbar-collapse').collapse('hide');
	});
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 350) {
			$('.ir-arriba').css("display", "block");
			$('.ir-arriba').css("opacity", "1");
		} else {
			$('.ir-arriba').css("display", "none");
			$('.ir-arriba').css("opacity", "0");
		}
		$('.seccion').each(function(i) {
			var scrollDistance = $(window).scrollTop();
			if ($(this).position().top <= scrollDistance) {
				$('.navbar-nav a.active').removeClass('active');
				$('.navbar-nav a').eq(i).addClass('active');
			}
		});
	});

});