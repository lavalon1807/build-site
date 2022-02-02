'use strict';
(function() {
	//Добавляем обработчик на удаление элементов
	window.deletElement = {
		delElement: function (count) {
			const wrapper = window.massivs.masContents[count].querySelector('.' 
				+ window.massivs.masContentsElement[count]);
			const delBtn = wrapper.querySelectorAll('.delete-btn');
			const placeholder = window.massivs.masContents[count].querySelector('.placeholder');
			const elements = window.massivs.masContents[count].querySelectorAll('.element');
			const massElements = Array.from(elements);
			
			placeholder.style.display = 'none';
			delBtn.forEach((item, index) => {
				item.onclick = () => {
					massElements.pop();
					elements[index].remove();
					if (massElements.length === 0) {
						placeholder.style.display = 'block';
						window.massivs.masContents[count].classList.add(window.massivs.masEmptyWrapper[count]);
					}
				}
			});
		},

		genDelButton: function(div) {
			const button = document.createElement('button');
			const span = document.createElement('span');
			span.classList.add('visually-hidden');
			span.innerHTML = 'Удалить элемент';
			button.setAttribute('type', 'button');
			button.classList.add('delete-btn');
			button.append(span);
			div.append(button);
		},

		addEnter: function(element) {
			element.addEventListener('keydown', function(evt) {
				if (evt.keyCode === 13) {
					evt.target.blur();
				}
			})
		}
	}
})();