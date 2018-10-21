$(document).ready(function(){
	$("#add-widget").click(function(){
		$("#widget-modal").modal();
	});
	$("#weather-btn").click(function(){
		var gridster = $(".gridster ul").gridster().data("gridster");
		gridster.add_widget('<li><header>|||<button type="button" class="remove">&times;</button></header><div><iframe src="/weather/index.html" height="430" width="300" style="border:none;"></iframe></div></li>', 2, 3);
	});
	$("#twitch-btn").click(function(){
		$("#twitch-modal").modal();
	});
	$("#twitter-btn").click(function(){
		$("#twitter-modal").modal();
	});
});

$(document).on("click", ".remove", function() {
	this.parentElement.parentElement.id = "remove";
	var gridster = $('.gridster ul').gridster().data('gridster');
	gridster.remove_widget($('*[id^="remove'));
})