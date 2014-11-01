
// SHAKEDOWNS JS

// Gallery Magnific Popup
$(document).ready(function() {
	$('#gallery').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
			enabled: true
		},
		disableOn: 600,
	});
});


// Animated divs in to view
// http://css-tricks.com/slide-in-as-you-scroll-down-boxes/
(function($) {

	/**
	 * Copyright 2012, Digital Fusion
	 * Licensed under the MIT license.
	 * http://teamdf.com/jquery-plugins/license/
	 *
	 * @author Sam Sehnert
	 * @desc A small plugin that checks whether elements are within
	 *     the user visible viewport of a web browser.
	 *     only accounts for vertical position, not horizontal.
	 */

	$.fn.visible = function(partial) {

		var $t            = $(this),
			$w            = $(window),
			viewTop       = $w.scrollTop(),
			viewBottom    = viewTop + $w.height(),
			_top          = $t.offset().top,
			_bottom       = _top + $t.height(),
			compareTop    = partial === true ? _bottom : _top,
			compareBottom = partial === true ? _top : _bottom;

	  return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

	};

 })(jQuery);

var mods = $(".module").addClass(function () {
	return $(this).visible(true) && "already-visible";
});

$(window).on("scroll", function () {
	mods.each(function () {
		$(this).toggleClass("come-in", $(this).visible(true));
	});
});



// Scrolling Page Anchors
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});