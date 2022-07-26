(function($) {
    "use strict"; // Start of use strict

    // Box & Form Auth
    $(".sign-in-btn").on('click', function(e){
        $("body").removeClass("active");
        $(".form-box").removeClass("active");
    })
    $(".sign-up-btn").on('click', function(e){
        $("body").addClass("active");
        $(".form-box").addClass("active");
    })
})(jQuery); 