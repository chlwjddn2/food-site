var $header = $('header');
var $nav_hide = $('.nav-hide');
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
        navigation: true,
        navigationPosition: 'right',

		// 페이지 이동할 때
		'onLeave' : function (index, nextIndex, direction){
			if(nextIndex == 1){
				$('header').removeClass('hide');
				$('header').removeClass('active');
			}
			else if (direction == 'down'){
				$('header').addClass('hide');
			} 
			else{
				$('header').removeClass('hide');
				$('header').addClass('active');
			}
		}
	});
	$('.nav-hide').click(function(){
		$('header').addClass('menu-open');
	})
	$('.close-menu-btn').click(function(){
		$('header').removeClass('menu-open');
	})
	
	// //methods
	// $.fn.fullpage.setAllowScrolling(false);
	$('.go-top').click(function(){
		$('html').animate({ scrollTop : 0}, 400);
	})
})

var swiper = new Swiper(".first", {
	spaceBetween: 0,
	loop: true,
	effect: "fade",
	centeredSlides: true,
	autoplay: {
	  delay: 6000,
	  disableOnInteraction: false,
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });
  var swiper = new Swiper(".second", {
	  spaceBetween: 30,
	  loop: true,
	  centeredSlides: true,
	  effect: "fade",
	  autoplay: {
		delay: 6000,
		disableOnInteraction: false,
	  },
	  pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	  },
	  navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	  },
	});
	var swiper = new Swiper(".third", {
	  effect: "fade",
	  scrollbar: {
		el: ".swiper-scrollbar",
		hide: false,
	  },
	  autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	  },
	});


$(function(){
	$(window).scroll(function(){
	var navbar = $(this).scrollTop();
	if(navbar > 100){
		$header.addClass('active');
	}else{
		$header.removeClass('active');
	}
  })
});

