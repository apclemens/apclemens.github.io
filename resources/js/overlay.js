function bind_overlay_open() {




$('a.project').click(function(event) {
    event.preventDefault();
    const url = event.target.parentElement.href;
    $('#overlay #overlay-content').load(url);
    // to open overlay:
    // 1. set overlay to position
    const box = event.target.parentElement.getBoundingClientRect();
    $('#overlay').css('left', box.x);
    $('#overlay').css('right', $(window).width() - box.x - box.width);
    $('#overlay').css('top', box.y);
    $('#overlay').css('bottom', $(window).height() - box.y - box.height);
    $('#overlay').css('display', 'block');
    $('#overlay').css('opacity', 0);
    // 2. give overlay animated class
    // 3. change size of overlay
    $('#overlay').animate({
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
        opacity: 1,
    }, 300, function() {
    
    
$('#close').click(function(event) {
    $('#overlay').animate({
        left: box.x,
        right: $(window).width() - box.x - box.width,
        top: box.y,
        bottom: $(window).height() - box.y - box.height,
        opacity: 0,
    }, 300, function() {
        $('#close').off('click');
        $('#overlay').css('display', 'none');
    })
})


    })
});





}

bind_overlay_open();
