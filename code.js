$('#links').find('a').each(function(index, value){
	$(this).click(function(event) {
		event.preventDefault();
		if ($('#non-links').hasClass('hidden')) {
			// transition over to new thing
			transition_over(value.href.replace('.html', '.txt'), index);
		} else {
			// pull up header and show things
			transition_up(value.href.replace('.html', '.txt'), index);
		}
	});
});

function transition_over(page, index) {
	var prev_index = $('.section-page')[0].id.replace('section', '');
	if (prev_index == index) {
		return;
	} else {
		$('#section').append('<div class="section-page" id="section'+index+'"></div>');
		$('#section'+index).load(page);

		$('.section-page').animate({'left': '-='+$('#content').width()}, 500);
		setTimeout(function() {
			$('#section'+prev_index).remove();
			$('.section-page').css('left',0);
		}, 600);
	}
}

function transition_up(page, index) {
	$('#section').append('<div class="section-page" id="section'+index+'"></div>');
	$('#section'+index).css('bottom', 500);
	$('#section'+index).load(page);

	$('#non-links').addClass('hidden');
	$('#section').addClass('show');
	setTimeout(function(){$('#section'+index).animate({'bottom': 0}, 500)}, 1000);
}

$('#header').click(function(event) {
	event.preventDefault();
	$('#section').removeClass('show');
	$('#non-links').removeClass('hidden');
	setTimeout(function(){$('.section-page').remove()}, 1000)
});
