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
	item.onclick = (event) => {
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
const massCCC = [
	header,  
	footer
];
console.log(massCCC);
for(let i =0; i<content.length; i++) {
	massCCC.splice(-1, 0, content[i]);
}

const ggg = (index, count) => {
	const div = document.createElement('div');
	const divv = div.cloneNode();
	const h1 = document.createElement('h1');
	const button = document.createElement('button');
	const span = document.createElement('span');

	span.classList.add('visually-hidden');
	span.innerHTML = 'Удалить элемент';
	button.setAttribute('type', 'button');
	button.classList.add('delete-btn');
	h1.setAttribute('data-placeholder', massMenu[index]);
	h1.setAttribute('contenteditable', 'true');
	h1.innerHTML = massMenu[index];
	div.classList.add('header__elements-wrapper');
	divv.classList.add('element', 'title');
	divv.setAttribute('tabindex', '0');
		//Меняем переменые, которые размещают дом элементы(место их вставки)
	massCCC[count].append(div);
	div.append(divv);
	divv.append(h1);
	divv.append(button);
	button.append(span);
};

menu.forEach((item, index) => {
	const buttonMenuu = item.querySelectorAll('button');
	for (let i = 0; i<buttonMenuu.length; i++) {
	buttonMenuu[i].onclick = () => {
		ggg(i, index);
	}
}
})
