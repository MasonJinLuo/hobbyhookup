$(document).on('click', '.connectButton', function(){
	console.log('connect button works!')
	var queryURL = "/beekeeping";
	window.location.href = queryURL;
});