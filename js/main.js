jQuery(window).scroll(function(){
    var fromTopPx = 20; // distance to trigger
    var scrolledFromtop = jQuery(window).scrollTop();
        console.log(scrolledFromtop);

    if(scrolledFromtop > fromTopPx){
        console.log('add');
        $("#bg").addClass('scrolled');
    }else{
         console.log('remove');
         $("#bg").removeClass('scrolled');
    }
});