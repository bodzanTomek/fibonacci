$(function () {
	 new Gallery({
		width: 400,
		duration: 500,
	});
	alert('Moved left');
});

class Gallery {
	constructor(config) {
		const $left = $(".left");
		const $right = $(".right");

		this.$slider = $(".slider");
		this.$sliderViewport = $(".slider-viewport");
		this.$imagesContainer = $(".images-container");
		this.$images = this.$imagesContainer.find('img');

		this.$sliderViewport.css('width', config.width + 'px');
		this.$imagesContainer.css('width', config.width * this.$images.length + 'px'); // tak naprawdę trochę więcej
		this.$imagesContainer.find('img').css('width', config.width + 'px');
		// this 
		$left.on("click", this.moveLeft.bind(this));
		$right.on("click", this.moveRight.bind(this));
	}

	moveLeft() {
		const $lastImage = this.$imagesContainer.find('img').last();
		this.$imagesContainer.prepend($lastImage);

		const marginLeft = parseInt(this.$imagesContainer.css('margin-left'));
		this.$imagesContainer.css('margin-left', marginLeft - config.width);

		this.$imagesContainer.animate({
			marginLeft: `+=${config.width}px`
		}, config.duration);
	}

	moveRight() {
		// TODO
	}
}

/*
		alert('Moved left');
		$(".right").hide();
		$(".images-container").css('background-color','#FF0000');
		//document.getElementsByClassName("container").style.background = 'black';//jak odwołać się do klasy?
	
		//document.getElementsByClassName("container") 
		const right = document.querySelectorAll('.right');
		const $right = $(right);
		*/