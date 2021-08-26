const mainElement = document.querySelector('main')
const linkOneElement = document.querySelector('#link-one')
const linkTwoElement = document.querySelector('#link-two')
const linkThreeElement = document.querySelector('#link-three')

const fetchAndInjectHTML = async (url, targetElement) => {
	const data = await fetch(url)
	const text = await data.text()
	targetElement.innerHTML = ''
	targetElement.insertAdjacentHTML('beforeend', text)
}

document.addEventListener('DOMContentLoaded', () => {
	fetchAndInjectHTML('page1.html', mainElement)

	linkOneElement.addEventListener('click', () =>
		fetchAndInjectHTML('page1.html', mainElement)
	)

	linkTwoElement.addEventListener('click', () =>
		fetchAndInjectHTML('page2.html', mainElement)
	)

	linkThreeElement.addEventListener('click', () =>
		fetchAndInjectHTML('page3.html', mainElement)
	)
})
