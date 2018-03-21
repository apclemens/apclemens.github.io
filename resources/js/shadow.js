window.onmousemove = function(e) {
    var x = -(e.clientX - $(window).width()/2) / 25;
    var y = -(e.clientY - $(window).height()/2) / 25;
    $('.shadow').css('box-shadow', ''+x+'px '+y+'px 0px var(--box-shadow-color)')
}
