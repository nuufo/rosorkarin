$(document).ready(function () {
	$('#mobile-toggle').on('click' , function () {
		$'#menu').slideToggle();
	});
});

//med repeat -1 lopar skite för evigt. 
TweenMax.to('##menu', 3, {rotation: 360, x:100, y:100, reapeat: 1, yoyo: true});
