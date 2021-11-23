'use strict';

//Переключаем страницы лендинг-блог-магазин
const blog = document.querySelector('#grid-blog');
const landing = document.querySelector('#grid-landing');
const shop = document.querySelector('#grid-shop');

blog.onclick = () => {document.location.href = 'blog-empty.html'}
landing.onclick = () => {document.location.href = 'landing-empty.html'}
shop.onclick = () => {document.location.href = 'shop-empty.html'}

//лендинг
const menu = document.querySelectorAll('.choose-elem');

const buttonMenu = document.querySelectorAll('.add-btn');
const delMenu = () => {
	menu.forEach(item => {
		item.style.display = 'none';
	});
};
delMenu();

const addMenu = (u) => {
	if (menu[u].style.display == 'none') {
		menu[u].style.display = 'flex'
	} else {
		menu[u].style.display = 'none'
	}
};

buttonMenu.forEach((item, index) => {
	item.onclick = () => {
		addMenu(index);
	}
});

window.onclick = (e) => {
		if (!e.target.closest('.add-btn')) {
			delMenu();
		}
}
const massMenu = ['Заголовок H1', 'Заголовок H2', 'Заголовок H3', 'Абзац текста', 'Изображение'];
//Добавляем заголовок в header
const header = document.querySelector('.header');
const content = document.querySelectorAll('.content');
const footer = document.querySelector('.footer');
const masContents = [
	header,  
	footer
];

const elementWrapper = 'content__element-wrapper';
const masContentsElement = [
	'header__elements-wrapper',
	'footer__elements-wrapper'
];

const massMenuElement = ['h1', 'h2', 'h3', 'p', 'button'];
for(let i =0; i<content.length; i++) {
	masContents.splice(-1, 0, content[i]);
	masContentsElement.splice(-1, 0, elementWrapper);
}
const constructorMenuWrapper = (count) => {
	const div = document.createElement('div');

	div.classList.add(masContentsElement[count]);//ТУТ добавляет класс, эврика
	masContents[count].append(div);
};
const constructorMenu = (index, count) => {
	const wrapper = masContents[count].querySelector('.' + masContentsElement[count]);
	const div = document.createElement('div');
	const h1 = document.createElement(massMenuElement[index]);
	const button = document.createElement('button');
	const span = document.createElement('span');

	span.classList.add('visually-hidden');
	span.innerHTML = 'Удалить элемент';
	button.setAttribute('type', 'button');
	button.classList.add('delete-btn');
	h1.setAttribute('data-placeholder', massMenu[index]);
	h1.setAttribute('contenteditable', 'true');
	h1.innerHTML = massMenu[index];
	div.classList.add('element', 'title');
	div.setAttribute('tabindex', '0');
		//Меняем переменые, которые размещают дом элементы(место их вставки)
	wrapper.append(div);
	div.append(h1);
	div.append(button);
	button.append(span);
};

menu.forEach((item, index) => {
	item.onclick = (evt) => {
		const target = evt.target.innerText;
		const wrapper = masContents[index].querySelector('.' + masContentsElement[index]);
		for (let i = 0; i < massMenu.length; i++) {	
					if (target == massMenu[i]) {
						if (!wrapper) {
							if (menu[index].style.display == 'flex') {
								constructorMenuWrapper(index);
								constructorMenu(i, index);
								delElement(index);
							}
					}	else if (menu[index].style.display == 'flex') {
						constructorMenu(i, index);
						delElement(index);
				} 
			}			
		}
	}
});

//Добавляем обработчик на удаление элементов
const delElement = (count) => {
	const wrapper = masContents[count].querySelector('.' + masContentsElement[count]);
	const delBtn = wrapper.querySelectorAll('.delete-btn');
	const elements = masContents[count].querySelectorAll('.element');
	delBtn.forEach((item, index) => {
		item.onclick = () => {
			elements[index].remove();
		}
	});
}