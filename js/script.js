
	$(window).scroll(function(){
		var windowTop = $(this).scrollTop();		

		

		$(".logo").css({
			'transform' : 'translate(0px, '+ windowTop /3 +'%)'
		});

		$(".foreground").css({
			'transform' : 'translate(-'+ windowTop /56 +'%, -'+ windowTop /56 +'%)'
		});

		if (windowTop> $('.grid').offset().top - ($(window).height() / 4.3)) {

			$('.grid .column').each(function(a){

			setTimeout(function(){
				$('.grid .column').eq(a).addClass('is_showing');
			}, 120 * (a+1));
			
		});

	}



	});