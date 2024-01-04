$('document').ready(function () {


    // RESTYLE THE DROPDOWN MENU
$('#google_translate_element').on("click", function () {

    // Change font family and color
    $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
        .css({
            'color': '#544F4B',
            'font-family': 'Roboto',
                            'width':'100%'
        });
    // Change menu's padding
    $("iframe").contents().find('.goog-te-menu2-item-selected').css ('display', 'none');
        
            // Change menu's padding
    $("iframe").contents().find('.goog-te-menu2').css ('padding', '0px');
  
    // Change the padding of the languages
    $("iframe").contents().find('.goog-te-menu2-item div').css('padding', '20px');
  
    // Change the width of the languages
    $("iframe").contents().find('.goog-te-menu2-item').css('width', '100%');
    $("iframe").contents().find('td').css('width', '100%');
  
    // Change hover effects
    $("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
        $(this).css('background-color', '#4385F5').find('span.text').css('color', 'white');
    }, function () {
        $(this).css('background-color', 'white').find('span.text').css('color', '#544F4B');
    });

    // Change Google's default blue border
    $("iframe").contents().find('.goog-te-menu2').css('border', 'none');

    // Change the iframe's box shadow
    $(".goog-te-menu-frame").css('box-shadow', '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)');
    
  
  
    // Change the iframe's size and position?
    $(".goog-te-menu-frame").css({
        'height': '100%',
        'width': '100%',
        'top': '0px'
    });
    // Change iframes's size
    $("iframe").contents().find('.goog-te-menu2').css({
        'height': '100%',
        'width': '100%'
    });
});
});


jQuery.fn.liScroll = function(settings) {
	settings = jQuery.extend({
		travelocity: 0.03
		}, settings);		
		return this.each(function(){
				var $strip = jQuery(this);
				$strip.addClass("newsticker")
				var stripHeight = 1;
				$strip.find("li").each(function(i){
					stripHeight += jQuery(this, i).outerHeight(true); // thanks to Michael Haszprunar and Fabien Volpi
				});
				var $mask = $strip.wrap("<div class='mask'></div>");
				var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");								
				var containerHeight = $strip.parent().parent().height();	//a.k.a. 'mask' width 	
				$strip.height(stripHeight);			
				var totalTravel = stripHeight;
				var defTiming = totalTravel/settings.travelocity;	// thanks to Scott Waye		
				function scrollnews(spazio, tempo){
				$strip.animate({top: '-='+ spazio}, tempo, "linear", function(){$strip.css("top", containerHeight); scrollnews(totalTravel, defTiming);});
				}
				scrollnews(totalTravel, defTiming);				
				$strip.hover(function(){
				  jQuery(this).stop();
				},
				function(){
				  var offset = jQuery(this).offset();
				  var residualSpace = offset.top + stripHeight;
				  var residualTime = residualSpace/settings.travelocity;
				  scrollnews(residualSpace, residualTime);
				});			
		});	
};

$(function(){
    $("ul#ticker01").liScroll();
});