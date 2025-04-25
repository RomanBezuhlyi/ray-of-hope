document.addEventListener('DOMContentLoaded', () => {
	const openModalBtns = document.querySelectorAll('.open-modal')
	const modalWrap = document.querySelector('.modal-wrap')
	const closeModalBtn = document.querySelector('.modal__close')
	const modal = document.querySelector('.modal')

	// Відкрити модалку
	openModalBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			modalWrap.classList.add('active')
			document.body.style.overflow = 'hidden'
		})
	})

	// Закрити модалку
	const closeModal = () => {
		modalWrap.classList.remove('active')
		document.body.style.overflow = ''
	}

	closeModalBtn.addEventListener('click', closeModal)

	// Закрити при кліку поза модалкою
	modalWrap.addEventListener('click', e => {
		if (!modal.contains(e.target)) {
			closeModal()
		}
	})
})
