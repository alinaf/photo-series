jQuery(window).scroll(function(){
    var full = 100; // distance to trigger
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