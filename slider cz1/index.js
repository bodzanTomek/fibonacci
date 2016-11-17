$(function () {
	const $slider = $(".slider");
	const $left = $(".left");
	const $right = $(".right");
	const $imageContainer = $(".image-container");

	$left.on("click", moveLeft);
	$right.on("click", moveRight);

	function moveLeft() { 
		alert('Moved left')
	}
	function moveRight() { }
		//document.getElementById("container").style.background = 'black'; dobranie się do id
		/*var a = document.getElementsByClassName("slider");
		for(i=0;i<a.length;a++)
			{
			a[i].style.background='red';
			} dobranie się do class*/
});