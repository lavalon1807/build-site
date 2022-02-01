'use strict';
(function () {
	//создаем выбранный из меню блок
	const genTitleElements = (blockTitle, div, count, index) => {
		blockTitle.setAttribute('data-placeholder', window.massivs.MASS_MENU[index]);
		blockTitle.setAttribute('contenteditable', 'true');
		blockTitle.innerHTML = window.massivs.MASS_MENU[index];
		div.classList.add('element', window.massivs.MASS_TEXT[index]);

		window.deletElement.addEnter(div);

		window.massivs.masContents[count].classList.remove(window.massivs.masEmptyWrapper[count]);
		div.setAttribute('tabindex', '0');
	};

	window.constructorTitleBlock = {
		constructorMenuWrapper: function (count) {
			const div = document.createElement('div');
			div.classList.add(window.massivs.masContentsElement[count]);
			div.classList.add('wrapper');
			window.massivs.masContents[count].classList.add('terofominsk');
			window.massivs.masContents[count].append(div);
		},

		constructorMenu: function (index, count, target) {
			const wrapper = window.massivs.masContents[count].querySelector('.' 
				+ window.massivs.masContentsElement[count]);
			const div = document.createElement('div');
			const blockTitle = document.createElement(window.massivs.MASS_MENU_ELEMENT[index]);

			if (target === 'Изображение') {
				window.constructorLoadImage.constructorMenuImage(index, count);
			} else {
				//добавляем стили к титульным эементам
				genTitleElements(blockTitle, div, count, index);
				//добавляем кнопку удаления
				window.deletElement.genDelButton(div);
				wrapper.append(div);
				div.append(blockTitle);
			}
		}
	};
})();