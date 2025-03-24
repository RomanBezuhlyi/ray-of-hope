var swiper1 = new Swiper('.swiperTeam', {
	navigation: {
		nextEl: '.swiperTeam__nav-next',
		prevEl: '.swiperTeam__nav-prev',
	},
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	speed: 800,
	spaceBetween: 24,
	slidesPerView: 1,
	grabCursor: true,
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 4,
		},
	},
})
