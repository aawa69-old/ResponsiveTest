// Some comment
$(document).ready(function() {
	
	var tp = $('.top p');
	var ct = $('.container');
	var lt = $('.left');
	var mt = $('.middle');
	var sb = $('.sidebar');
	var sideNav = $(".nav-sidebar");

	function doResize(e) {
		var ww = $(window).width();
	 
		tp.text("Container: " + ct.width() + " - Window: " + ww);
		$('.left p').text("Step: " + lt.width());
		$('.middle p').text("Content: "+ mt.width());
		$('.right p').text("Side Bar: "+ sb.width());
	}

	// Handle change of media query & initial load ...
	var handleMediaChange = function (mediaQueryList) {
		var initial = document.readyState === "complete" ? false : true;
		
	    if (mediaQueryList.matches) {
	    	if (initial) {					// The browser window is 1200px or less
    		sb.addClass( 'hide');			// Set side bar initial state
	    	} else {
	    		hideSide();					
	    	}
	    } else {
	    	if (!initial) {
	    		showSide();					// The browser window is 1200px or less
	    	}
	    }
	};		
	
	// TODO: Something
	function hideSide() {
		var sb = $('.sidebar');
		sb.fadeOut(500, function() { sb.addClass('hide'); });
	} 

	function showSide() {
		var sb = $('.sidebar');
		sb.fadeIn(500, function() { sb.removeClass('hide'); }); 
	} 

	$(window).on('resize', doResize);		// Check area sizes (temporary - testing only)

	// Toggle the side bar on click of the side bar button ...
	sideNav.on('click', function(event) { sb.hasClass('hide') ? showSide(): hideSide(); });

	// Listener for change of media query ..
	var mql = window.matchMedia("(max-width: 1200px)");
	mql.addListener(handleMediaChange);
	handleMediaChange(mql);
});
