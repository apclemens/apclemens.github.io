if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
window.onmousemove = function(e) {
    var x = (e.clientX - $(window).width()/2);
    var y = -(e.clientY - $(window).height()/2);
    $('.shadow').css('box-shadow', ''+(-x / 83)+'px '+(y / 83)+'px 35px var(--box-shadow-color)')
/*
	// change picture
	// distance from mouse to center
	x /= $(window).width();
	y /= $(window).height();
	var distance = Math.sqrt(x**2 + y**2);
	var distance_file = Math.min(17,parseInt(Math.abs(distance)*17*2));
	if (distance_file == 0) {
		$('#front-image').attr('src', '/resources/images/pic.jpg');
		return;
	}
	// angle
	var theta = parseInt((Math.atan2(y,x) / Math.PI + 1) / 2 * 16);
	$('#front-image').attr('src', '/resources/images/front/'+distance_file+'-'+theta+'.jpg');
*/

}
}

