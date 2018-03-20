$('#links').find('a').each(function(index, value){
	$(this).click(function(event) {
		event.preventDefault();
        transition_to('/section_parts'+value.getAttribute('href'), index)
	});
});

function transition_to(page, index) {
    $("#links>li:nth-child("+(index+1)+")>a").addClass('current');
    if ($('#non-links').height() == 0) {
        // transition over to new thing
        transition_over(page, index);
    } else {
        // pull up header and show things
        transition_up(page, index);
    }
}

function transition_over(page, index) {
	var prev_index = $('.section-page')[0].id.replace('section', '');
    var left;
	if (prev_index == index) {
		return;
	} else if (prev_index > index) {
        left = -$('#content').outerWidth();
    } else {
        left = $('#content').outerWidth();
    }
    $('#section').append('<div class="section-page" id="section'+index+'" style="left: '+left+'px"></div>');
    $('#section'+index).load(page);

    $('.section-page').animate({'left': '-='+left}, 500);
    $('#stem').animate(
            {'left': $('#content').offset().left + $('#content').outerWidth()*(2*index+1)/8}
            , 500);
    setTimeout(function() {
	    console.log($("#links>li:nth-child("+(prev_index+1)+")>a"));
    	$("#links>li:nth-child("+(prev_index+1)+")>a").removeClass('current');
        $('#section'+prev_index).remove();
        $('.section-page').css('left',0);
    }, 600);
}

function transition_up(page, index) {
	$('#section').append('<div class="section-page" id="section'+index+'"></div>');
	$('#section'+index).css('top', -500);
	$('#section'+index).load(page);

    setTimeout(function(){$('#non-links').animate({'height': 0}, 250);}, 0);
    setTimeout(function(){
        $('#stem').css({
            'opacity': 1,
            'top': $('#content').offset().top + $('#content').outerHeight(),
            'left': $('#content').offset().left + $('#content').outerWidth()*(2*index+1)/8
        });
        $('#stem').animate({'height': 40}, 250)
    }, 250);
    setTimeout(function(){
        $('#section').animate({'height': 200}, 250);
        $('#section').css({'opacity': 1});
    }, 500);
	setTimeout(function(){$('#section'+index).animate({'top': 0}, 250)}, 750);
}

function transition_down() {
    $("#links>li>a").removeClass('current');
    setTimeout(function(){$('.section-page').animate({'top': -200}, 250);}, 0);
    setTimeout(function(){$('#section').animate({'height': 0}, 250);}, 250);
    setTimeout(function(){
        $('#stem').animate({'height': 0}, 250);
        $('#section').css({'opacity': 0});
    }, 500);
    setTimeout(function(){
        $('#non-links').animate({'height': 200}, 250);
        $('#stem').css({'opacity': 0});
    }, 750);

	setTimeout(function(){$('.section-page').remove()}, 1000);
}

$('#header').click(function(event) {
	event.preventDefault();
    transition_down();
});

function transition_open() {
    var height = $('#content').height();
    $('.dropdown').css('bottom', '+=300px');
    $('#content').css({
        'height': 0,
    });
    $('#links li').css('bottom', -50);

    $('#content').animate({
        'height': height
    }, 500);
    setTimeout(function(){
        $('.dropdown').animate({
            'bottom': 0
        }, 500);
    }, 500);
    $('#links li').each(function(index){
        var ths = this;
        setTimeout(function(){
            $(ths).animate({
                'bottom': 0
            }, 250);
        }, 100*index + 900);
    });
    setTimeout(function(){
        $('#content').css('height', 'auto');
    }, 700)
}
transition_open();
