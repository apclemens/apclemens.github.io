$('#links').find('a').each(function(index, value){
	$(this).click(function(event) {
		event.preventDefault();
        transition_to('/section_parts'+value.getAttribute('href'), index, value.getAttribute('href'), 'andrew clemens - ' + $(this).text(), true)
	});
});

body_background_colors = [ // 300
	'#E0E0E0', // home page - grey
	'#9575CD', // projects - deep purple
	'#E57373', // websites - red
	'#81C784', // themes - green
	'#90A4AE', // contact - blue grey
	];

border_colors = [ // 900
	'#212121', // home page
	'#311B92', // projects
	'#B71C1C', // websites
	'#1B5E20', // themes
	'#263238', // contact
	];

main_background_colors = [ // 50
	'#FAFAFA', // home page
	'#EDE7F6', // projects
	'#FFEBEE', // websites
	'#E8F5E9', // themes
	'#ECEFF1', // contact
	];

window.onpopstate = function(e){
    if(e.state){
	    if(e.state.newtitle == "andrew clemens") {
		    transition_down(false);
	    } else {
        	    transition_to(e.state.page, e.state.index, e.state.newurl, e.state.newtitle, false);
	    }
    } else {
	    transition_down(false);
    }
};

function transition_to(page, index, newurl, newtitle, setstate) {
    document.title = newtitle;
    if (setstate){
    window.history.pushState({"page":page, "index":index, "newurl":newurl, "newtitle":newtitle},"", newurl);}
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
    $("#links>li:nth-child("+(+prev_index+1)+")").removeClass('current');
    $('#section').append('<div class="section-page" id="section'+index+'" style="left: '+left+'px"></div>');
    $('#section'+index).load(page);

    $('.section-page').animate({'left': '-='+left}, 500);
    $('body').animate({'backgroundColor': body_background_colors[index+1]}, 500);
    $('.shadow').animate({
	    'backgroundColor': main_background_colors[index+1],
	    'borderColor': border_colors[index+1],
    }, 500);
    $('#stem').animate(
            {'left': $('#content').offset().left + $('#content').outerWidth()*(2*index+1)/8}
            , 500);
    setTimeout(function() {
    	$("#links>li:nth-child("+(index+1)+")").addClass('current');
        $('#section'+prev_index).remove();
        $('.section-page').css('left',0);
	if(index!=3) set_scroll();
    }, 600);
}

function transition_up(page, index) {
	$('#section').append('<div class="section-page" id="section'+index+'"></div>');
	$('#section'+index).css('top', -500);
	$('#section'+index).load(page);

    $('body').animate({'backgroundColor': body_background_colors[index+1]}, 1000);
    $('.shadow').animate({
	    'backgroundColor': main_background_colors[index+1],
	    'borderColor': border_colors[index+1],
    }, 1000);
    setTimeout(function(){$('#non-links').animate({'height': 0}, 250);}, 0);
    setTimeout(function(){
        $('#stem').css({
            'opacity': 1,
            'top': $('#content').offset().top + $('#content').outerHeight(),
            'left': $('#content').offset().left + $('#content').outerWidth()*(2*index+1)/8
        });
    	$("#links>li:nth-child("+(index+1)+")").addClass('current');
        $('#stem').animate({'height': 40}, 250)
    }, 250);
    setTimeout(function(){
        $('#section').animate({'height': 250}, 250);
        $('#section').css({'opacity': 1});
    }, 500);
	setTimeout(function(){
		$('#section'+index).animate({'top': 0}, 250)
	}, 750);
	setTimeout(function(){
		if(index!=3) set_scroll();
	},1100);
}

function transition_down(setstate) {
    if(document.title == 'andrew clemens'){return;}
    document.title = 'andrew clemens';
	if (setstate){
    window.history.pushState({"newtitle":'andrew clemens'},"", '/');}
    $('body').animate({'backgroundColor': body_background_colors[0]}, 1000);
    $('.shadow').animate({
	    'backgroundColor': main_background_colors[0],
	    'borderColor': border_colors[0],
    }, 1000);
    setTimeout(function(){$('.section-page').animate({'top': -250}, 250);}, 0);
    setTimeout(function(){$('#section').animate({'height': 0}, 250);}, 250);
    setTimeout(function(){
    	$("#links>li").removeClass('current');
        $('#stem').animate({'height': 0}, 250);
        $('#section').css({'opacity': 0});
    }, 500);
    setTimeout(function(){
        $('#non-links').animate({'height': 250}, 250);
        $('#stem').css({'opacity': 0});
    }, 750);

	setTimeout(function(){
		$('.section-page').remove()
	}, 1000);
}

$('#header').click(function(event) {
	event.preventDefault();
    transition_down(true);
});

function transition_open_front() {
    var height = $('#content').height();
    $('.dropdown').css('bottom', '+=300px');
    $('#content').css({
        'height': 0,
    });
    $('#links li').css('bottom', -50);
    $('body').css({'backgroundColor': body_background_colors[0]});
    $('.shadow').css({
	    'backgroundColor': main_background_colors[0],
	    'borderColor': border_colors[0],
    });

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

function transition_open_section(index) {
    $('body').css({'backgroundColor': body_background_colors[index+1]});
    $('.shadow').css({
	    'backgroundColor': main_background_colors[index+1],
	    'borderColor': border_colors[index+1],
    });
	if(index==-1){
		transition_open_front();
		return;
	}
    $("#links>li:nth-child("+(index+1)+")").addClass('current');
    $('#non-links').css('height', 0);
    $('#stem').css({
            'opacity': 1,
            'top': $('#content').offset().top + $('#content').outerHeight(),
            'left': $('#content').offset().left + $('#content').outerWidth()*(2*index+1)/8
    });
    $('#stem').css('height', 40);
    $('#section').css({'opacity': 1, 'height': 250});
    $('#section'+index).css('top', 0);
	if(index!=3) set_scroll();
}
