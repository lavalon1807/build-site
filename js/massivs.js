'use strict';
(function() {
	const header = document.querySelector('.header');
	const footer = document.querySelector('.footer');
	const content = document.querySelectorAll('.content');
	const elementWrapper = 'content__element-wrapper';
	const elementEmpty = 'content--empty';

	window.massivs = {
		SIZE_SVG: 32,
		SIZE_VIEBOX: 48,
		MASS_MENU: ['Заголовок H1', 'Заголовок H2', 'Заголовок H3', 'Абзац текста', 'Изображение'],
		MASS_TEXT: ['title', 'title', 'title', 'text', 'image'],
		MASS_MENU_ELEMENT: ['h1', 'h2', 'h3', 'p', 'button'],

		masContents: [header, footer],
		masContentsElement: ['header__elements-wrapper',	'footer__elements-wrapper'],
		masEmptyWrapper: ['header--empty',	'footer--empty']
	}

	for(let i =0; i<content.length; i++) {
		window.massivs.masContents.splice(-1, 0, content[i]);
		window.massivs.masContentsElement.splice(-1, 0, elementWrapper);
		window.massivs.masEmptyWrapper.splice(-1, 0, elementEmpty);
	};
})();