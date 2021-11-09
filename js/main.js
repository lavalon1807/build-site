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
const masContentsElement = [
	'header__elements-wrapper',
	'content__element-wrapper',
	'footer__elements-wrapper'
];
const fff = ['h1', 'h2', 'h3', 'p', 'button'];
for(let i =0; i<content.length; i++) {
	masContents.splice(-1, 0, content[i]);
}

const constructorMenu = (index, count) => {
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
	div.classList.add(masContentsElement[count]);//ТУТ добавляет класс, эврика
	divv.classList.add('element', 'title');
	divv.setAttribute('tabindex', '0');
		//Меняем переменые, которые размещают дом элементы(место их вставки)
	masContents[count].append(div);
	div.append(divv);
	divv.append(h1);
	divv.append(button);
	button.append(span);
};
const constructorMenu2 = (index, count) => {
	const rrr = document.querySelector('.header__elements-wrapper')
	const div = document.createElement('div');
	// const divv = div.cloneNode();
	const h1 = document.createElement(fff[index]);
	const button = document.createElement('button');
	const span = document.createElement('span');

	span.classList.add('visually-hidden');
	span.innerHTML = 'Удалить элемент';
	button.setAttribute('type', 'button');
	button.classList.add('delete-btn');
	h1.setAttribute('data-placeholder', massMenu[index]);
	h1.setAttribute('contenteditable', 'true');
	h1.innerHTML = massMenu[index];
	// div.classList.add('header__elements-wrapper');
	div.classList.add('element', 'title');
	div.setAttribute('tabindex', '0');
		//Меняем переменые, которые размещают дом элементы(место их вставки)
	rrr.append(div);
	div.append(h1);
	div.append(button);
	button.append(span);
};
const constructorMenu3 = (index, count) => {
	const rrr = document.querySelector('.footer__elements-wrapper')
	const div = document.createElement('div');
	// const divv = div.cloneNode();
	const h1 = document.createElement(fff[index]);
	const button = document.createElement('button');
	const span = document.createElement('span');

	span.classList.add('visually-hidden');
	span.innerHTML = 'Удалить элемент';
	button.setAttribute('type', 'button');
	button.classList.add('delete-btn');
	h1.setAttribute('data-placeholder', massMenu[index]);
	h1.setAttribute('contenteditable', 'true');
	h1.innerHTML = massMenu[index];
	// div.classList.add('header__elements-wrapper');
	div.classList.add('element', 'title');
	div.setAttribute('tabindex', '0');
		//Меняем переменые, которые размещают дом элементы(место их вставки)
	rrr.append(div);
	div.append(h1);
	div.append(button);
	button.append(span);
};
const constructorMenu4 = (index, count) => {
	const rrr = document.querySelector('.content__element-wrapper')
	const div = document.createElement('div');
	// const divv = div.cloneNode();
	const h1 = document.createElement(fff[index]);
	const button = document.createElement('button');
	const span = document.createElement('span');

	span.classList.add('visually-hidden');
	span.innerHTML = 'Удалить элемент';
	button.setAttribute('type', 'button');
	button.classList.add('delete-btn');
	h1.setAttribute('data-placeholder', massMenu[index]);
	h1.setAttribute('contenteditable', 'true');
	h1.innerHTML = massMenu[index];
	// div.classList.add('header__elements-wrapper');
	div.classList.add('element', 'title');
	div.setAttribute('tabindex', '0');
		//Меняем переменые, которые размещают дом элементы(место их вставки)
	rrr.append(div);
	div.append(h1);
	div.append(button);
	button.append(span);
};

menu.forEach((item, index) => {
	item.onclick = (evt) => {
		let target = evt.target.innerText;
		let targetG = evt.target.tagName;
		const headerWrapper = document.querySelector('.header__elements-wrapper');
		const footerWrapper = document.querySelector('.footer__elements-wrapper');
		const contentWrapper = document.querySelector('.content__element-wrapper');
		for (let i = 0; i < massMenu.length; i++) {
			// if (headerWrapper && target == massMenu[i] && targetG == 'SVG') {
			// 	constructorMenu2(i, index)
			// 	console.log('header')
			// } else if (footerWrapper && target == massMenu[i]) {
			// 	constructorMenu3(i, index)
			// 	console.log('footer')
			// } else if (target == massMenu[i]) {
			// 	constructorMenu(i, index);
			// 	console.log('without');
			// }
// 			buttonMenu.forEach((item, index) => {
// 	item.onclick = () => {
// 		addMenu(index);
// 	}
// });

			if (target == massMenu[i]) {
				if (!headerWrapper) {
					if (menu[0].style.display == 'flex') {
						constructorMenu(i, index)
						console.log('header')
					}
				} else if (menu[0].style.display == 'flex') {
					constructorMenu2(i, index)
					console.log('header-without')
					console.log(menu[0])
				}
				if (!contentWrapper) {
					if (menu[1].style.display == 'flex') {
						constructorMenu(i, index)
						console.log('content')
					}
				} else if (menu[1].style.display == 'flex') {
					constructorMenu4(i, index)
					console.log('content-without')
					console.log(menu[1])
				}
				if (!footerWrapper) {
					if (menu[2].style.display == 'flex') {
						constructorMenu(i, index)
						console.log('footer')
					}
				} else if (menu[2].style.display == 'flex') {
					constructorMenu3(i, index)
					console.log('footer-without')
					console.log(menu[2])
				}
			}
		}
	}
	// const buttonMenuu = item.querySelectorAll('.button');
	// for (let i = 0; i<buttonMenuu.length; i++) {
	// buttonMenuu[i].onclick = (evt) => {
	// 	const headerWrapper = document.querySelector('.header__elements-wrapper');
	// 	const footerWrapper = document.querySelector('.footer__element-wrapper');
	// 	if(headerWrapper) {
	// 		constructorMenu2(i, index);
	// 		console.log('2')
	// 	} else if (footerWrapper && item[index]) {
	// 		constructorMenu3(i, index);
	// 		console.log('3')
	// 	} else {
	// 		constructorMenu(i, index);
	// 		console.log('no')
	// 		console.log(item[index])
	// 	}
	// 	// constructorMenu(i, index);
	// }
// }
})
