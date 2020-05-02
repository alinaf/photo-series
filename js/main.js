jQuery(window).scroll(function(){
	console.log('hi');
    var full = 100; // distance to trigger
    var fadeToWhite = 200;
    var scrolledFromtop = jQuery(window).scrollTop();
    // console.log(scrolledFromtop);

    if(scrolledFromtop > full){
    	// console.log(scrolledFromtop);
    	$("#bg").addClass('scrolled');
    // 	    if(scrolledFromtop > 300) {
    // 			var nystories = document.querySelector("h1").offsetTop;
    // 			var opac = (scrolledFromtop / nystories);
    // 			console.log(opac);
    // 			// alert(document.getElementById("bg").innerHTML);
    // 			document.getElementById("bg").style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url('img/empty.png') no-repeat";
    // 			// document.getElementById(#bg).style.background-image = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url(img/empty.png) no-repeat";
    // }
    }else{
    	$("#bg").removeClass('scrolled');
    	}
    });

$(window).load(function() {
	$("body").removeClass("preload");
});