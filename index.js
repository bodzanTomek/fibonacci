window.addEventListener('load', () => {
	 var gallery = new Gallery({
		width: 400,
		duration: 500,
	});
})

// >=ES6
class Gallery {
	constructor(config) {
		const $left = $(".left");
		const $right = $(".right");

 		this.config = config;
		this.position = 0;

		const $sliderViewport = $(".slider-viewport");
		this.$imagesContainer = $(".images-container");
		this.$images = this.$imagesContainer.find('img');

		$sliderViewport.css('width', config.width + 'px');
		this.$imagesContainer.css('width', config.width * this.$images.length + 30 + 'px'); // tak naprawdę trochę więcej
		this.$imagesContainer.find('img').css('width', config.width + 'px');
		
		$left.on("click", this.moveLeft.bind(this));
		$right.on("click", this.moveRight.bind(this));
	}

	moveLeft() {
		const $lastImage = this.$imagesContainer.find('img').last();
		this.$imagesContainer.prepend($lastImage);

		const marginLeft = parseInt(this.$imagesContainer.css('margin-left'));
		this.$imagesContainer.css('margin-left', marginLeft - this.config.width);

		this.$imagesContainer.animate({
			marginLeft: 0
		}, this.config.duration);

		this.position = this.position - 1 + this.$images.length % this.$images.length;
	}

	moveRight() {
		this.$imagesContainer.animate({
			marginLeft: -this.config.width
		}, this.config.duration, () => {
			const $firstImage = this.$imagesContainer.find('img').first();
			this.$imagesContainer.append($firstImage);	
			this.$imagesContainer.css('margin-left', 0);
		});

		this.position = this.position + 1 % this.$images.length;
	}
}

// >= ES3
function Gallery (config) {
	const $left = $(".left");
	const $right = $(".right");

	this.config = config;
	this.position = 0;

	const $sliderViewport = $(".slider-viewport");
	this.$imagesContainer = $(".images-container");
	this.$images = this.$imagesContainer.find('img');

	$sliderViewport.css('width', config.width + 'px');
	this.$imagesContainer.css('width', config.width * this.$images.length + 30 + 'px'); // tak naprawdę trochę więcej
	this.$imagesContainer.find('img').css('width', config.width + 'px');
	
	$left.on("click", this.moveLeft.bind(this));
	$right.on("click", this.moveRight.bind(this));
}

Gallery.prototype = {
	moveLeft() {
		const $lastImage = this.$imagesContainer.find('img').last();
		this.$imagesContainer.prepend($lastImage);

		const marginLeft = parseInt(this.$imagesContainer.css('margin-left'));
		this.$imagesContainer.css('margin-left', marginLeft - this.config.width);

		this.$imagesContainer.animate({
			marginLeft: 0
		}, this.config.duration);

		this.position = this.position - 1 + this.$images.length % this.$images.length;
	},

	moveRight() {
		this.$imagesContainer.animate({
			marginLeft: -this.config.width
		}, this.config.duration, () => {
			const $firstImage = this.$imagesContainer.find('img').first();
			this.$imagesContainer.append($firstImage);	
			this.$imagesContainer.css('margin-left', 0);
		});

		this.position = this.position + 1 % this.$images.length;
	}
}