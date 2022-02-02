'use strict';
(function () {
	//Переключаем страницы лендинг-блог-магазин
	const massContents = ['header', 'content', 'footer'];
	const massLayout = ['layout--landing', 'layout--blog', 'layout--shop'];
	const layout = document.querySelector('.layout');
	const maketsSelect = document.querySelectorAll('.grid-select__btn');
	const miniMaketsSelect = document.querySelectorAll('.grid-select__radio');
	
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
			giveWrapperAfterDel();
		}
	})

	const giveWrapperAfterDel = () => {
		const wrapper = document.querySelectorAll('.wrapper');
		const additionalClass = document.querySelectorAll('.additionalClass');

		for (let i = 0; i < wrapper.length; i++) {
			//удаляем все имеющиеся элементы
			wrapper[i].remove();

			if (additionalClass[i].classList.contains(massContents[i])) {
				additionalClass[i].classList.add(massContents[i] + '--empty');		
			}
			const t = additionalClass[i].querySelector('.placeholder');
			t.style.display = 'block';
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