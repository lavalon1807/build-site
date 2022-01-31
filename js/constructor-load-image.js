'use strict';
(function () {
	const genSvg = (svg, newpath) => {
		svg.setAttributeNS(null, 'width', window.massivs.SIZE_SVG);
		svg.setAttributeNS(null, 'height', window.massivs.SIZE_SVG);
		svg.setAttributeNS(null, 'viewBox', '0 0 ' + window.massivs.SIZE_VIEBOX + 
			' ' + window.massivs.SIZE_VIEBOX);
		svg.setAttributeNS(null, 'fill', 'none');
		newpath.setAttributeNS(null, "fill-rule", "evenodd");
		newpath.setAttributeNS(null, "clip-rule", "evenodd"); 
		newpath.setAttributeNS(null, "d", 
			"M6 2V8H0V12H6V18H10V12H16V8H10V2H6ZM12 14V20H6V40C6 42.2 7.8 44 10\
			44H42C44.2 44 46 42.2 46 40V16C46 13.8 44.2 12 42 12H35.66L32 8H18V14H12ZM26\
			38C31.52 38 36 33.52 36 28C36 22.48 31.52 18 26 18C20.48 18 16 22.48 16\
			28C16 33.52 20.48 38 26 38ZM26 34C22.68 34 20 31.32 20 28C20 24.68 22.68\
			22 26 22C29.32 22 32 24.68 32 28C32 31.32 29.32 34 26 34Z");
	};
	const genSvgButton = (buttonImg, div) => {
		buttonImg.setAttribute('type', 'button');
		buttonImg.classList.add('add-img-btn');
		window.deletElement.genDelButton(div);//добавляем кнопку удаления
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
	window.constructorLoadImage = {
		//вставляем в разметку svg и path
		constructorMenuImage: function (index, count) {
			const wrapper = window.massivs.masContents[count].querySelector
				('.' + window.massivs.masContentsElement[count]);
			const div = document.createElement('div');

			const buttonImg = document.createElement('button'); //кнопка с фото svg
			const xmlns = 'http://www.w3.org/2000/svg';
			const svg = document.createElementNS(xmlns, 'svg');
			const newpath = document.createElementNS(xmlns, "path"); 

			div.classList.add('element', 'element--' + window.massivs.MASS_TEXT[index], 
				window.massivs.MASS_TEXT[index]);
			div.setAttribute('tabindex', '0');
			window.massivs.masContents[count].classList.remove(window.massivs.masEmptyWrapper[count]);

			genSvgButton(buttonImg, div);//добавляем характеристики для кнопки SVG
			genSvg(svg, newpath);//добавляем характеристики SVG

			svg.append(newpath);
			buttonImg.append(svg);
			div.append(buttonImg);
		  
			wrapper.append(div);
			//тут добавляем под условиями новый блок загрузки картинки
			window.addPhotoPicture.conditionLoadImg(count, buttonImg, div);
		},

		constructorUploadImage: function (divWrapper, buttonLoadPicture) {
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

			// window.onclick = (e) => {
			// 	if (!e.target.closest('.image')) {
			// 		divLoad.style.display = 'none';
			// 	}
			// }
				

			divWrapper.append(img);
			divWrapper.append(divLoad);
			divLoad.append(pLoad);
			divLoad.append(input);
			divLoad.append(label);
			label.append(inputLabel);
			//тут вызываем с множественными параметрами обработчики на загрузку картинки
			//в зависимости от условий
			label.addEventListener('click', function() {

				window.addPhotoPicture.showUploudInput(label, divLoad, 
					buttonLoadPicture, img, input);

				window.addPhotoPicture.showUploadLocal(input, inputLabel, 
					img, divLoad, buttonLoadPicture);
			})
		}
	};
})();