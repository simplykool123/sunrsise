/* ---------------------------------------------------------------------- 
* Product Name: Color-Switcher-Plugin
* Product URI: http://shariarbd.com/demo/color-switcher-plugin/
* Author: Shariar
* Author URI: http://shariarbd.com/
* Description: Color Switcher plugin is a simple and easy to use plugin used to switch color of a site.
* Version: 1.0.0
* License: The MIT License (MIT)
* Tags: color switcher
* ---------------------------------------------------------------------- */

/* Styles Switcher
------------------------------------------------------------------------ */

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function($) {
	"use strict"
	
	$("ul.colors .color1" ).click(function(){
		$("#colors" ).attr("href", "css/style-blue.css" );
		return false;
	});

	$("ul.colors .color2" ).click(function(){
		$("#colors" ).attr("href", "css/style-dark blue.css" );
		return false;
	});

	$("ul.colors .color3" ).click(function(){
		$("#colors" ).attr("href", "css/style-gold.css" );
		return false;
	});

	$("ul.colors .color4" ).click(function(){
		$("#colors" ).attr("href", "css/style-red.css" );
		return false;
	});

	$("ul.colors .color5" ).click(function(){
		$("#colors" ).attr("href", "css/style-yellow.css" );
		return false;
	});
	$("ul.colors .color6" ).click(function(){
		$("#colors" ).attr("href", "css/style.css" );
		return false;
	});
	
	
	$("#color-style-switcher .bottom a.settings").click(function(e){
		e.preventDefault();
		var div = $("#color-style-switcher");
		if (div.css("left") === "-189px") {
			$("#color-style-switcher").animate({
				left: "0px"
			}); 
		} else {
			$("#color-style-switcher").animate({
				left: "-189px"
			});
		}
	})

	$("ul.colors li a").click(function(e){
		e.preventDefault();
		$(this).parent().parent().find("a").removeClass("active");
		$(this).addClass("active");
	})

});



//Inject Necessary Styles and HTML
jQuery('head').append('<link rel="stylesheet" id="colors" href="css/fly-style.css" type="text/css" />');
jQuery('head').append('<link rel="stylesheet" href="css/color-switcher.css" type="text/css" />'); 

jQuery('body').append('' + 
	'<div id="color-style-switcher">' +
		'<div>' + 
			'<h3>Color Palette</h3>' +
			'<ul class="colors">' +
				'<li><a class="color1" href="#"></a></li>' +
				'<li><a class="color2" href="#"></a></li>' +
				'<li><a class="color3" href="#"></a></li>' +
				'<li><a class="color4" href="#"></a></li>' +
				'<li><a class="color5" href="#"></a></li>' +
				'<li><a class="color6 active" href="#"></a></li>' +				
			'</ul>' +
		'</div>' +
		'<div class="bottom"> <a href="#" class="settings"></a> </div>' +
	'</div>' +
'');
