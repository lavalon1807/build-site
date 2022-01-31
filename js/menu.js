'use strict';
(function () {
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
})();