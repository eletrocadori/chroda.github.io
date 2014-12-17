$(function(){
	$('#fotos ul.gallery').galleryView({
		transition_speed	:1000, 		//INT 		- duration of panel/frame transition (in milliseconds)
		transition_interval	:3000, 		//INT 		- delay between panel/frame transitions (in milliseconds)
		panel_width			:1000, 		//INT 		- width of gallery panel (in pixels)
		panel_height		:400, 		//INT 		- width of gallery panel (in pixels)
		start_frame			:1, 		//INT 		- index of panel/frame to show first when gallery loads
		show_filmstrip		:true, 		//BOOLEAN 	- flag to show or hide filmstrip portion of gallery
		enable_slideshow	:true,		//BOOLEAN 	- flag indicating whether to display slideshow play/pause button
		autoplay			:true,		//BOOLEAN 	- flag to start slideshow on gallery load
		frame_opacity		:0.5, 		//FLOAT 	- transparency of non-active frames (1.0 = opaque, 0.0 = transparent)
		infobar_opacity		:0.5,		//FLOAT 	- transparency for info bar
		frame_gap			:10
	});
	
		
	$('a[href*=#]:not([href=#])').click(function(){
		if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
			var target=$(this.hash);target=target.length?target:$('[name=' + this.hash.slice(1) +']');
			if(target.length){$('html,body').animate({scrollTop:target.offset().top}, 1000);return false;}
		}
	});

	$('.phone').mask('(00) 0000-0000');
	
});