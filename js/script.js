function logIt(it){
	$(".log-content").append("<p>"+it+"</p>");
}

var calendarWidth = parseInt($(".calendar-container").css("width"));
var calendarHeight = calendarWidth * 0.6;
$(".calendar-container").css("height", calendarHeight);

for(i=0; i<7; i++){
	$(".row").append('<div class="box"></div>');
}