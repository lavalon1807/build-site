'use strict';
(function () {
	//Переключаем страницы лендинг-блог-магазин
	const blog = document.querySelector('#grid-blog');
	const landing = document.querySelector('#grid-landing');
	const shop = document.querySelector('#grid-shop');
	const layout = document.querySelector('.layout');

	const blogItem = document.querySelector('.layout--blog');
	const landingItem = document.querySelector('.layout--landing');
	const shopItem = document.querySelector('.layout--shop');
	const maketsSelect = document.querySelectorAll('.grid-select__btn');
	const miniMaketsSelect = document.querySelectorAll('.grid-select__radio');
	
	const massMaket = [landing, blog, shop];
	const massLayout = ['layout--landing', 'layout--blog', 'layout--shop'];
	const massClassMaket = ['1', '2', '3'];
	const massAddress = ['blog-empty.html', 'landing-empty.html', 'shop-empty.html'];

	const delClass = (element, firstClassElement, secondClassElement) => {
		element.removeAttribute('class');
		element.setAttribute('class', firstClassElement);
		element.classList.add(secondClassElement);
	};
	delClass(layout, massLayout[0]);
	
	miniMaketsSelect[0].checked = 'true';

	maketsSelect.forEach((item, index) => {
		item.onclick = () => {
			delClass(layout, 'layout', massLayout[index]);
		}
	})
})();