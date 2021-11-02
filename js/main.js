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
	console.log(e.target.tagName)
		if (!e.target.closest('.add-btn')) {
			delMenu();
		}
}
wadawdadad
asfasffasf11111