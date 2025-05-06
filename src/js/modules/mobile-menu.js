document.addEventListener('DOMContentLoaded', function () {
	const burgerButton = document.querySelector('.header__right-burger')
	const mobileNav = document.querySelector('.mobile-nav')
	const body = document.body
	const mobileNavLinks = document.querySelectorAll('.mobile-nav__list a')

	function closeMobileMenu() {
		mobileNav.classList.remove('active')
		burgerButton.classList.remove('active')
		body.style.overflow = ''
	}

	burgerButton.addEventListener('click', function () {
		const isActive = mobileNav.classList.contains('active')
		mobileNav.classList.toggle('active')
		burgerButton.classList.toggle('active')
		body.style.overflow = isActive ? '' : 'hidden'
	})

	mobileNavLinks.forEach(link => {
		link.addEventListener('click', function () {
			closeMobileMenu()
		})
	})
})
