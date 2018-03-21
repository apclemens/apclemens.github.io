window.onmousemove = function(e) {
    console.log(e);
    var x = (e.clientX - $(window).width()/2) / 100;
    var y = (e.clientY - $(window).height()/2) / 100;
    $('.shadow').css('box-shadow', '5px '+x+'px '+y+'px #888888')
}
