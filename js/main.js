jQuery(window).scroll(function(){
    var full = 100; // distance to trigger
    var scrolledFromtop = jQuery(window).scrollTop();

    if(scrolledFromtop > full){
        console.log('add');
        $("#bg").addClass('scrolled');
    }else{
         console.log('remove');
         $("#bg").removeClass('scrolled');
    }
});

$(window).load(function() {
  $("body").removeClass("preload");
});