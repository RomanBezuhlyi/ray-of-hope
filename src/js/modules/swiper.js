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
var swiper2 = new Swiper('.swiperWorkshops', {
	navigation: {
		nextEl: '.swiperWorkshops__nav-next',
		prevEl: '.swiperWorkshops__nav-prev',
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
		600: {
			slidesPerView: 2,
		},
	},
})
var swiper3 = new Swiper('.swiperCatalog', {
	navigation: {
		nextEl: '.swiperCatalog__nav-next',
		prevEl: '.swiperCatalog__nav-prev',
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
		991: {
			slidesPerView: 4,
		},
	},
})
