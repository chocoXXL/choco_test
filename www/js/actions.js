
$(document).ready(function() {  



$( "#nav_btn" ).click(function() {
if ($( "#nav_main" ).hasClass( "nav_show" )) {
	console.log("osea hello NO");
	$("#nav_main").addClass("nav_hide");
	$("#nav_main").removeClass("nav_show");
	}
else {
	console.log("osea hello");
	$("#nav_main").removeClass("nav_hide");
	$("#nav_main").addClass("nav_show");
	}
});


/* LA BURGER */
    var bittee = 1;	
    $( ".btn_mordida" ).click(function() {
        console.log('bite bite')
        if (bittee == 1) { 
            $(".burger").addClass("bite");
            $("#nav_main").addClass("nav_show");
            $("#btn_mordida").addClass("bite");
            bittee = 2;
            console.log('are SI');
        }
        else {
            $(".burger").removeClass("bite");
            $("#nav_main").addClass("nav_hide");
			$("#nav_main").removeClass("nav_show");
			$("#btn_mordida").removeClass("bite");
            bittee = 1;
            console.log('are NO');
        }
    });



});//FIN

//	$("nav").toggle("slow", function(){
//	});
