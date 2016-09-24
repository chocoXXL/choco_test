
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

    $( ".nav_li_btn " ).click(function() {

       console.log("espera...");
            setTimeout(
            function() {
                       
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
            },
            400);
    });

/* EL SCROLL CROLL*/
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
                 if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                        if (target.length) {
                        $('html, body').animate({
                          //scrollTop: target.offset().top
                           scrollTop: target.offset().top - 0
                        }, 2000);
                        return false;
                        }
                    }
     });
});



});

document.addEventListener("deviceready", 
    function(){

        var button = document.getElementById("cameraBtn");
        button.addEventListener("click", function() {
            navigator.camera.getPicture(onSuccess, onFail);
        });

});
function onSuccess(imageFile){
    var imgTag = document.getElementById("picture");
    imgTag.src = imageFile;
}
function onFail(message){
    alert(message);
}//FIN

//  $("nav").toggle("slow", function(){
//  });
