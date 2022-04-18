$(document).ready(function() {
    var active = window.location.pathname

    if (active.indexOf("/learn") > -1) {
        clearActive()
        $("#learn").addClass('active');
    } 
    else if (active.indexOf("/") > -1) {
        clearActive()
        $("#home").addClass('active');
    }
})

function clearActive() {
    $(".mr-auto .nav-item").each(function() {
        $(this).removeClass("active");
    });
}

