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

	const delClassOnMakets = (element, firstClassElement, secondClassElement) => {
		element.removeAttribute('class');
		element.setAttribute('class', firstClassElement);
		element.classList.add(secondClassElement);
	};
	delClassOnMakets(layout, massLayout[0]);
	
	miniMaketsSelect[0].checked = 'true';

	maketsSelect.forEach((item, index) => {
		item.onclick = () => {
			delClassOnMakets(layout, 'layout', massLayout[index]);
			ggg();
		}
	})
	const rrr = ['.header', '.content', '.footer'];
	const ggg = () => {
		const wrapper = document.querySelectorAll('.wrapper');
		const placeholder = document.querySelectorAll('.placeholder');
		const terofominsk = document.querySelectorAll('.terofominsk');

		for (let i = 0; i < wrapper.length; i++) {
			wrapper[i].remove();

			if (terofominsk[i].classList.contains('header')) {
				terofominsk[i].classList.add('header--empty');
				const t = document.querySelector('.header');
				const placeholder = t.querySelector('.placeholder');
				placeholder.style.display = 'block';
				console.log('0')
			} else if (terofominsk[i].classList.contains('content')) {
				terofominsk[i].classList.add('content--empty');
				const t = terofominsk[i].querySelector('.placeholder');
				t.style.display = 'block';
				/*for (let r = 0; r < t.length; r++) {
					const placeholder = t[r].querySelectorAll('.placeholder');
					// console.log(placeholder)
					placeholder[r].style.display = 'block';
				}*/
				
				console.log('1')
			} else if (terofominsk[i].classList.contains('footer')) {
				terofominsk[i].classList.add('footer--empty');
				const t = document.querySelector('.footer');
				const placeholder = t.querySelector('.placeholder');
				placeholder.style.display = 'block';
				console.log('2')
			}
			
			// window.massivs.masContents[i].classList.add(window.massivs.masEmptyWrapper[i]);
		}
	}

	const delElement = (count) => {
		const wrapper = window.massivs.masContents[count].querySelector('.' 
			+ window.massivs.masContentsElement[count]);
		const delBtn = wrapper.querySelectorAll('.delete-btn');
		const placeholder = window.massivs.masContents[count].querySelector('.placeholder');
		const elements = window.massivs.masContents[count].querySelectorAll('.element');
		const massElements = Array.from(elements);
		
		placeholder.style.display = 'none';
		delBtn.forEach((item, index) => {
			item.onclick = () => {
				massElements.pop();
				elements[index].remove();
				if (massElements.length === 0) {
					placeholder.style.display = 'block';
					window.massivs.masContents[count].classList.add(window.massivs.masEmptyWrapper[count]);
				}
			}
		});
	}
})();