$(document).ready(function(){

		
	$("#button1").click(function() {
			
		var red = Math.floor(Math.random() * 256);
		var green = Math.floor(Math.random() * 256);
		var blue = Math.floor(Math.random() * 256);
		console.log(red);
		
		// "rgb(100,213,123)";
		// "rgb(" + red + ",+ green +" ,"123)"; 
		
		var color = "rgb(" + red + "," + green +", "+ blue+")";
			
		$ ("body").css("background-color", color);
		
	});
});
