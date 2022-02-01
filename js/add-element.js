'use strict';
(function () {
	const menu = document.querySelectorAll('.choose-elem');
	const addElementsFromMenu = () => {

		menu.forEach((item, index) => {
			item.onclick = (evt) => {
				const target = evt.target.innerText;
				const wrapper = window.massivs.masContents[index].querySelector('.' 
					+ window.massivs.masContentsElement[index]);

				for (let i = 0; i < window.massivs.MASS_MENU.length; i++) {
					if (target !== window.massivs.MASS_MENU[i]) continue;

					if (!wrapper && menu[index].style.display == 'flex') {
						window.constructorTitleBlock.constructorMenuWrapper(index);
					}
					window.constructorTitleBlock.constructorMenu(i, index, target);
					window.deletElement.delElement(index);
				}
			}
		});
	};
	addElementsFromMenu();

})();