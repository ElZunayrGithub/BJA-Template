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
    // Tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
        'customClass': 'custom-tooltip'
    })
    })
})(jQuery); 