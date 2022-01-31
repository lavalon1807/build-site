'use strict';
(function () {
	const content = document.querySelectorAll('.content');
	
	const readerFile = (inputLabel, img, divLoad, buttonLoadPicture) => {
		let file = inputLabel.files[0];
		if (file) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        img.src = reader.result;
      });

      reader.readAsDataURL(file);
      divLoad.style.display = 'none';
			buttonLoadPicture.style.display = 'none';
    }
	};

	const addClickOnUploadImage = (labelClick, divLoad, buttonLoadPicture, img, input) => {
		divLoad.style.display = 'none';
		buttonLoadPicture.style.display = 'none';
		img.src = input.value;
	};

	window.addPhotoPicture = {
		//обработчик если загрузка через ввод адреса
		showUploudInput: function (labelClick, divLoad, buttonLoadPicture, img, input) {
			labelClick.onclick = (evt) => {
				if (input.value !== '') {
					addClickOnUploadImage(labelClick, divLoad, buttonLoadPicture, img, input);
					evt.preventDefault();
				}
			}
		},
		//обработчик через ввод локальной загрузки
		showUploadLocal: function (input, inputLabel, img, divLoad, buttonLoadPicture) {
			inputLabel.onchange = () => {
				if (input.value === '') {
					readerFile(inputLabel, img, divLoad, buttonLoadPicture);
				}
			}
		},

		conditionLoadImg: function (count, buttonImg, div) {
			if (window.massivs.masContents[count] !== content[count - 1]) {
				buttonImg.addEventListener('click', () => {
					window.constructorLoadImage.constructorUploadImage(div, buttonImg)
				}, {once: true});
			} else if(window.massivs.masContents[count] === content[count - 1]) {
				window.constructorLoadImage.constructorUploadImage(div, buttonImg);
			}	
		}
	};
})();