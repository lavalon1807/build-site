'use strict';
//Переключаем страницы лендинг-блог-магазин
const blog = document.querySelector('#grid-blog');
const landing = document.querySelector('#grid-landing');
const shop = document.querySelector('#grid-shop');

blog.onclick = () => {document.location.href = 'blog-empty.html'}
landing.onclick = () => {document.location.href = 'landing-empty.html'}
shop.onclick = () => {document.location.href = 'shop-empty.html'}

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
};

const massMenu = ['Заголовок H1', 'Заголовок H2', 'Заголовок H3', 'Абзац текста', 'Изображение'];
const massText = ['title', 'title', 'title', 'text', 'image'];
const massMenuElement = ['h1', 'h2', 'h3', 'p', 'button'];
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

for(let i =0; i<content.length; i++) {
	masContents.splice(-1, 0, content[i]);
	masContentsElement.splice(-1, 0, elementWrapper);
	masEmptyWrapper.splice(-1, 0, elementEmpty);
};

const constructorMenuWrapper = (count) => {
	const div = document.createElement('div');
	div.classList.add(masContentsElement[count]);//ТУТ добавляет класс, эврика
	masContents[count].append(div);
};

const constructorMenu = (index, count, target) => {
	const wrapper = masContents[count].querySelector('.' + masContentsElement[count]);
	const div = document.createElement('div');
	const blockTitle = document.createElement(massMenuElement[index]);

	if (target === 'Изображение') {
		constructorMenuImage(index, count);
	} else {
		//добавляем стили к титульным эементам
		genTitleElements(blockTitle, div, count, index);
		//добавляем кнопку удаления
		genDelButton(div);
		wrapper.append(div);
		div.append(blockTitle);
	}
};

const genDelButton = (div) => {
	const button = document.createElement('button');
	const span = document.createElement('span');
	span.classList.add('visually-hidden');
	span.innerHTML = 'Удалить элемент';
	button.setAttribute('type', 'button');
	button.classList.add('delete-btn');
	button.append(span);
	div.append(button);
};

const genTitleElements = (blockTitle, div, count, index) => {
	blockTitle.setAttribute('data-placeholder', massMenu[index]);
	blockTitle.setAttribute('contenteditable', 'true');
	blockTitle.innerHTML = massMenu[index];
	div.classList.add('element', massText[index]);
	masContents[count].classList.remove(masEmptyWrapper[count]);
	console.log(masEmptyWrapper[count])
	div.setAttribute('tabindex', '0');
};

const genSvg = (svg, newpath) => {
  svg.setAttributeNS(null, 'width', 32);
  svg.setAttributeNS(null, 'height', 32);
  svg.setAttributeNS(null, 'viewBox', '0 0 ' + 48 + ' ' + 48);
  svg.setAttributeNS(null, 'fill', 'none');
	newpath.setAttributeNS(null, "fill-rule", "evenodd");
	newpath.setAttributeNS(null, "clip-rule", "evenodd"); 
	newpath.setAttributeNS(null, "d", "M6 2V8H0V12H6V18H10V12H16V8H10V2H6ZM12 14V20H6V40C6 42.2 7.8 44 10 44H42C44.2 44 46 42.2 46 40V16C46 13.8 44.2 12 42 12H35.66L32 8H18V14H12ZM26 38C31.52 38 36 33.52 36 28C36 22.48 31.52 18 26 18C20.48 18 16 22.48 16 28C16 33.52 20.48 38 26 38ZM26 34C22.68 34 20 31.32 20 28C20 24.68 22.68 22 26 22C29.32 22 32 24.68 32 28C32 31.32 29.32 34 26 34Z");
};

const genSvgButton = (buttonImg, div) => {
	buttonImg.setAttribute('type', 'button');
  buttonImg.classList.add('add-img-btn');
  genDelButton(div);//добавляем кнопку удаления
};

const conditionLoadImg = (count, buttonImg, div) => {
	if (masContents[count] !== content[count - 1]) {
		buttonImg.addEventListener('click', () => {
			constructorUploadImage(div, buttonImg)
		}, {once: true});
	} else if(masContents[count] === content[count - 1]) {
		constructorUploadImage(div, buttonImg);
	}	
};

const genButtonLoad = (inputLabel, label, input) => {
	inputLabel.classList.add('visually-hidden');
  inputLabel.setAttribute('type', 'file');
  inputLabel.setAttribute('accept', 'image/png, image/jpeg');
	label.classList.add('img-upload__label');
	label.textContent = 'Загрузить';
	input.setAttribute('type', 'url');
	input.setAttribute('placeholder', 'Вставить ссылку на изображение');
};

//вставляем в разметку svg и path
const constructorMenuImage = (index, count) => {
	const wrapper = masContents[count].querySelector('.' + masContentsElement[count]);
	const div = document.createElement('div');

  const buttonImg = document.createElement('button'); //кнопка с фото svg
  
  const xmlns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(xmlns, 'svg');
  const newpath = document.createElementNS(xmlns, "path"); 

  div.classList.add('element', 'element--' + massText[index], massText[index]);
  div.setAttribute('tabindex', '0');
  masContents[count].classList.remove(masEmptyWrapper[count]);

  genSvgButton(buttonImg, div);//добавляем характеристики для кнопки SVG
  genSvg(svg, newpath);//добавляем характеристики SVG

	svg.append(newpath);
	buttonImg.append(svg);
  div.append(buttonImg);
  
	wrapper.append(div);
	//тут добавляем под условиями новый блок загрузки картинки
	conditionLoadImg(count, buttonImg, div);
};

const constructorUploadImage = (divWrapper, buttonLoadPicture) => {
	const divLoad = document.createElement('div'); //основной инпут для загрузки изображения
	const pLoad = document.createElement('p');
	const input = document.createElement('input');
  const label = document.createElement('label');
  const inputLabel = document.createElement('input');
  const img = document.createElement('img');

  divLoad.style.display = 'block';
  divLoad.classList.add('img-upload');
  divWrapper.classList.add('element--uploading');
  divWrapper.classList.remove('element--image');
  pLoad.textContent = 'Загрузите изображение';
  //добавляем стили для блока загрузки изображения
	genButtonLoad (inputLabel, label, input);

	divWrapper.append(img);
	divWrapper.append(divLoad);
	divLoad.append(pLoad);
	divLoad.append(input);
	divLoad.append(label);
	label.append(inputLabel);
	//тут вызываем с множественными параметрами обработчик на загрузку картинки
	addClickOnUploadImage(label, divLoad, buttonLoadPicture, img, input);
};

const addClickOnUploadImage = (labelClick, divLoad, buttonLoadPicture, img, input) => {
	labelClick.onclick = (evt) => {
		divLoad.style.display = 'none';
		buttonLoadPicture.style.display = 'none';
		img.src = input.value;
		evt.preventDefault();
	}
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
								constructorMenu(i, index, target);
								delElement(index);
							}
					}	else if (menu[index].style.display == 'flex') {
						constructorMenu(i, index, target);
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
};