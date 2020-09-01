jQuery(document).ready(function(){
	
	jQuery('.icon').click (function(event){
		event.preventDefault();
		if( jQuery (this).hasClass('inOut')  ){
			jQuery('.colors-option').stop().animate({right:'0px'},500 );
		} else{
			jQuery('.colors-option').stop().animate({right:'-200px'},500 );
		} 
		jQuery(this).toggleClass('inOut');
		return false;

	}  );

	jQuery(".color1" ).click(function(){
		jQuery("#colors" ).attr("href", "assets/css/skin/color1.css" );
		return false;
	});
	
	jQuery(".color2" ).click(function(){
		jQuery("#colors" ).attr("href", "assets/css/skin/color2.css" );
		return false;
	});
	
	jQuery(".color3" ).click(function(){
		jQuery("#colors" ).attr("href", "assets/css/skin/color3.css" );
		return false;
	});
	
	jQuery(".color4" ).click(function(){
		jQuery("#colors" ).attr("href", "assets/css/skin/color4.css" );
		return false;
	});
		
	jQuery(".color5" ).click(function(){
		jQuery("#colors" ).attr("href", "assets/css/skin/color5.css" );
		return false;
	});
	
	jQuery(".color6" ).click(function(){
		jQuery("#colors" ).attr("href", "assets/css/skin/color6.css" );
		return false;
	});
	
	jQuery(".color7" ).click(function(){
		jQuery("#colors" ).attr("href", "assets/css/skin/color7.css" );
		return false;
	});
	
	jQuery(".color8" ).click(function(){
		jQuery("#colors" ).attr("href", "assets/css/skin/color8.css" );
		return false;
	});
	
} );
