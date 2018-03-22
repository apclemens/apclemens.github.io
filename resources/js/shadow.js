if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
window.onmousemove = function(e) {
    var x = -(e.clientX - $(window).width()/2) / 75;
    var y = -(e.clientY - $(window).height()/2) / 75;
    $('.shadow').css('box-shadow', ''+x+'px '+y+'px 50px var(--box-shadow-color)')
}
}

