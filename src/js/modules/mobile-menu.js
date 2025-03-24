document.addEventListener('DOMContentLoaded', function () {
	const burgerButton = document.querySelector('.header__right-burger')
	const mobileNav = document.querySelector('.mobile-nav')
	const body = document.body

	burgerButton.addEventListener('click', function () {
		const isActive = mobileNav.classList.contains('active')

		mobileNav.classList.toggle('active')
		burgerButton.classList.toggle('active')
		body.style.overflow = isActive ? '' : 'hidden'
	})
})
