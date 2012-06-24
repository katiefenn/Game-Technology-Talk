/* Author: 

*/

var index = 0;
$(document).ready(function() {
	$(document).keydown(function(event) {
	
		if (event.keyCode == 39) {
			event.preventDefault();
			index = index + 1;
            console.log(index * $('body').width());
            $('html, body').animate({scrollLeft: index * $('body').width()}, 500);
		}
		
		if (event.keyCode == 37) {
			event.preventDefault();
			index = index - 1;
            $('html, body').animate({scrollLeft: index * $('body').width()}, 500);
		}
	});
	
	$(document).click(function(event) {
		event.stopPropagation();
		if ($(event.currentTarget).not('a')) {
			event.preventDefault();
			index = index + 1;
            $('html, body').animate({scrollLeft: index * $('body').width()}, 500);
		}
	});
	
	$('a').click(function(event) {
		event.stopPropagation();
	});
});



















