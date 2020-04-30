$(document).scroll(function () {
    var y = $(this).scrollTop();
        console.log(y);

    if (y > 1000) {
        $('#img2').fadeIn({});
    }
    else {$('#img2').fadeOut('slow')};
    
    if (y > 2000) {
        $('#img3').fadeIn({});
    }
    else {$('#img3').fadeOut('slow')};
    
    if (y > 3000) {
        $('#img4').fadeIn({});
    }
    else {$('#img4').fadeOut('fast')};

});