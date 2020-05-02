jQuery(window).scroll(function(){
	console.log('hi');
    var full = 200; // distance to trigger
    var scrolledFromtop = jQuery(window).scrollTop();

    if(scrolledFromtop > full){
    	$("#bg").addClass('scrolled');
    }else{
    	$("#bg").removeClass('scrolled');
    }
});

$(window).load(function() {
	$("body").removeClass("preload");
});


// Fade to white, but doesn't look right
// $(function () {

//     var $select = $('#select');
//     var $window = $(window);
//     var isFixed = false;
//     var init = $select.length ? $select.offset().top : 0;
    
//     var $jumbo = $('#bg');
//     var jumboHeight = $jumbo.height();
    
//     $window.scroll(function () {
//         var currentScrollTop = $window.scrollTop();
        
//         var currentJumboAlpha = Math.max(1 - ((currentScrollTop * 100 / jumboHeight) / 100), 0);
    
//         $jumbo.css('opacity', currentJumboAlpha);
        
//         if (currentScrollTop > init && isFixed === false) {
//             isFixed = true;
//             $select.css({
//                 top: 0,
//                 position: 'fixed'
//             });
//             $('body').css('padding-top', $select.height());
//         } else if (currentScrollTop <= init && isFixed === true) {
//             isFixed = false;
//             $select.css('position', 'relative');
            
//             $('body').css('padding-top', 0);
//         }
//     });

//     $(".nav").click(function (e) {
//         e.preventDefault();
//         var divId = $(this).attr('href');
//         $('body').animate({
//             scrollTop: $(divId).offset().top - $select.height()
//         }, 500);
//     });
// });