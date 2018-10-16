
$(document).on( "click", "#add-widget", function() {
	var gridster = $('.gridster ul').gridster().data('gridster');
    	gridster.add_widget('<li class="new"></li>', 2, 1);
});