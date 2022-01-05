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
const massText = ['title', 'title', 'title', 'text', 'title'];
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
const elementEmpty = 'content--empty'
const masEmptyWrapper = [
	'header--empty',
	'footer--empty'
];

const massMenuElement = ['h1', 'h2', 'h3', 'p', 'button'];
for(let i =0; i<content.length; i++) {
	masContents.splice(-1, 0, content[i]);
	masContentsElement.splice(-1, 0, elementWrapper);
	masEmptyWrapper.splice(-1, 0, elementEmpty);
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
	div.classList.add('element', massText[index]);
	masContents[count].classList.remove(masEmptyWrapper[count]);

	div.setAttribute('tabindex', '0');
		//Меняем переменые, которые размещают дом элементы(место их вставки)
	wrapper.append(div);
	div.append(h1);
	div.append(button);
	button.append(span);
};
//вставляем в разметку svg и path
const constructorMenuImage = (count) => {
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('add-img-btn');
 

  const xmlns = 'http://www.w3.org/2000/svg';
  const boxWidth = 32;
  const boxHeight = 32;
  const addBoxSize = 16;

  const svg = document.createElementNS(xmlns, 'svg');
  svg.setAttributeNS(null, 'width', boxWidth);
  svg.setAttributeNS(null, 'height', boxHeight);
  svg.setAttributeNS(null, 'viewBox', '0 0 ' + 48 + ' ' + 48);
  svg.setAttributeNS(null, 'fill', 'none');
  
  const newpath = document.createElementNS(xmlns, "path");  
	newpath.setAttributeNS(null, "fill-rule", "evenodd");
	newpath.setAttributeNS(null, "clip-rule", "evenodd"); 
	newpath.setAttributeNS(null, "d", "M6 2V8H0V12H6V18H10V12H16V8H10V2H6ZM12 14V20H6V40C6 42.2 7.8 44 10 44H42C44.2 44 46 42.2 46 40V16C46 13.8 44.2 12 42 12H35.66L32 8H18V14H12ZM26 38C31.52 38 36 33.52 36 28C36 22.48 31.52 18 26 18C20.48 18 16 22.48 16 28C16 33.52 20.48 38 26 38ZM26 34C22.68 34 20 31.32 20 28C20 24.68 22.68 22 26 22C29.32 22 32 24.68 32 28C32 31.32 29.32 34 26 34Z");

	svg.append(newpath);
	button.append(svg);
  header.appendChild(button);
};
constructorMenuImage();

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
	const placeholder = masContents[count].querySelector('.placeholder');
	const elements = masContents[count].querySelectorAll('.element');
	const massElements = Array.from(elements);
	
	placeholder.style.display = 'none';
	delBtn.forEach((item, index) => {
		item.onclick = () => {
			massElements.pop();
			elements[index].remove();
			if (massElements.length === 0) {
				placeholder.style.display = 'block';
				masContents[count].classList.add(masEmptyWrapper[count]);
			}
		}
	});
}