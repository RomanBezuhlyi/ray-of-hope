document.querySelectorAll('.faq__item-btn').forEach(btn => {
	btn.addEventListener('click', () => {
		const item = btn.closest('.faq__item')
		const isOpen = item.classList.contains('open')

		document
			.querySelectorAll('.faq__item')
			.forEach(i => i.classList.remove('open'))

		if (!isOpen) {
			item.classList.add('open')
		}
	})
})
