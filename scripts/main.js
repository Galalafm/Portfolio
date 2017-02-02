var image = document.querySelector('.Container_Image'), // image index
		imageWorks1 = document.querySelector('.work1'), // images works
		imageWorks2 = document.querySelector('.work2'),
		imageWorks3 = document.querySelector('.work3'),
		allImageWorks = [imageWorks1, imageWorks2, imageWorks3],
		imageLeft1 = document.querySelector('.imgL1'), // images left
		imageLeft2 = document.querySelector('.imgL2'),
		allImgL = [imageLeft1, imageLeft2],
		bio = document.querySelector('.bio'), // bio index
		bio1 = document.querySelector('.bio1'), // bios works
		bio2 = document.querySelector('.bio2'),
		bio3 = document.querySelector('.bio3'),
		allBio = [bio1, bio2, bio3],
		bioL1 = document.querySelector('.bioL1'), // bios left
		bioL2 = document.querySelector('.bioL2'),
		allBioL = [bioL1, bioL2],
		button = document.querySelector('.button'), // button index
		button1 = document.querySelector('.button1'), // buttons works
		button2 = document.querySelector('.button2'),
		button3 = document.querySelector('.button3'),
		allButton = [button1, button2, button3],
		buttonL1 = document.querySelector('.buttonL1'), // buttons left
		buttonL2 = document.querySelector('.buttonL2'),
		allButtonL = [buttonL1, buttonL2],
		textButton = document.querySelector('#Text_Button'), // textB index
		textB1 = document.querySelector('.textB1'), // textB works
		textB2 = document.querySelector('.textB2'),
		textB3 = document.querySelector('.textB3'),
		allTextB = [textB1, textB2, textB3],
		textBL1 = document.querySelector('.textBL1'), // textB left
		textBL2 = document.querySelector('.textBL2'),
		allTextBL = [textBL1, textBL2],
		imgButton = document.querySelector('.Img_Button'), // imgB index
		imgB1 = document.querySelector('.imgB1'), // imgB works
		imgB2 = document.querySelector('.imgB2'),
		imgB3 = document.querySelector('.imgB3'),
		allImgB = [imgB1, imgB2, imgB3],
		imgBL1 = document.querySelector('.imgBL1'), // imgB left
		imgBL2 = document.querySelector('.imgBL2'),
		allImgBL = [imgBL1, imgBL2],
		container = document.querySelector('.Container'),
		burger = document.querySelector('.Menu_Burger');

document.addEventListener("DOMContentLoaded", function(event) {
	if (window.matchMedia("(max-width: 1200px)").matches){
		buttonIn();
		buttonInLeft();
		imageWorks.classList.add("-active");
	}
});

// Transition

function transitionIn(){
	if (window.matchMedia("(min-width: 1200px)").matches){
		if (image != null) {
			// we are in index.html
			image.classList.add("-active");
		}
		else {
			// we are in works.html
			allImageWorks.forEach(function(e){
				e.classList.add("-active");
			});
		}
		bioOut();
		buttonIn();
	}
}

function transitionInLeft(){
	if (window.matchMedia("(min-width: 1200px)").matches){
		allImgL.forEach(function(e){
			e.classList.add("-active");
		});
		bioOutLeft();
		buttonInLeft();
	}
}

function transitionOut(){
	if (window.matchMedia("(min-width: 1200px)").matches){
		if (image != null) {
			// we are in index.html
			image.classList.remove("-active");
		}
		else {
			// we are in works.html
			allImageWorks.forEach(function(e){
				e.classList.remove("-active");
			});
		}
		bioIn();
		buttonOut()
	}
}

function transitionOutLeft(){
	if (window.matchMedia("(min-width: 1200px)").matches){
		allImgL.forEach(function(e){
			e.classList.remove("-active");
		});
		bioInLeft();
		buttonOutLeft();
	}
}

// Bio

function bioOut(){
	if (bio != null){
		// we are in index.html
		bio.classList.add("fadeOut");
		bio.style.animationDuration = "0.2s";
	}
	else {
		// we are in works.html
		allBio.forEach(function(e){
			e.classList.add("fadeOut");
			e.style.animationDuration = "0.2s";
		});
	}
}

function bioOutLeft(){
	allBioL.forEach(function(e){
		e.classList.add("fadeOut");
		e.style.animationDuration = "0.2s";
	});
}

function bioIn(){
	if (bio != null){
		// we are in index.html
		bio.classList.remove("fadeOut");
		bio.classList.add("fadeIn");
		bio.style.animationDuration = "2s";
	}
	else {
		// we are in works.html
		allBio.forEach(function(e){
  		e.classList.remove("fadeOut");
  		e.classList.add("fadeIn");
  		e.style.animationDuration = "2s";
  	});
	}
}

function bioInLeft(){
	allBioL.forEach(function(e){
		e.classList.remove("fadeOut");
		e.classList.add("fadeIn");
		e.style.animationDuration = "2s";
	});
}

// Button

function buttonIn(){
	if (button != null){
		// we are in index.html
		button.style.backgroundColor = "#191919";
		button.style.transition = "background-color 0.5s";
		textButton.style.color = "#FEFEFE";
		imgButton.src = "images/plus2.png";
	}
	else {
		// we are in works.html
		allButton.forEach(function(e){
			e.style.backgroundColor = "#191919";
			e.style.transition = "background-color 0.5s";
		});
		allTextB.forEach(function(e){
			e.style.color = "#FEFEFE";
		});
		allImgB.forEach(function(e){
			e.src = "images/plus2.png";
		});
	}
}

function buttonInLeft(){
	allButtonL.forEach(function(e){
		e.style.backgroundColor = "#191919";
		e.style.transition = "background-color 0.5s";
	});
	allTextBL.forEach(function(e){
		e.style.color = "#FEFEFE";
	});
	allImgBL.forEach(function(e){
		e.src = "images/plus2.png";
	});
}

function buttonOut(){
	if (button != null){
		// we are in index.html
		button.style.backgroundColor = "transparent";
		button.style.transition = "background-color 0.2s";
		textButton.style.color = "#191919";
		imgButton.src = "images/plus.png";
	}
	else {
		// we are in works.html
		allButton.forEach(function(e){
			e.style.backgroundColor = "transparent";
			e.style.transition = "background-color 0.2s";
		});
		allTextB.forEach(function(e){
			e.style.color = "#191919";
		});
		allImgB.forEach(function(e){
			e.src = "images/plus.png";
		});
	}
}

function buttonOutLeft(){
	allButtonL.forEach(function(e){
		e.style.backgroundColor = "transparent";
		e.style.transition = "background-color 0.2s";
	});
	allTextBL.forEach(function(e){
		e.style.color = "#191919";
	});
	allImgBL.forEach(function(e){
		e.src = "images/plus.png";
	});
}

// Burger Menu

function openMenu(){
	container.style.display = "none";
	burger.style.display = "block";
}

function closeMenu(){
	burger.style.display = "none";
	container.style.display = "block";
}
