$(document).ready(function() {
    save_current_page(window.location.pathname)
    $("#learn-intro-next-btn").click(function() {
        window.location.href = "/learn/2";
    });

    $("#learn-lesson-next-btn").click(function() {
        window.location.href = "/learn/" + (parseInt($(this).attr("data-current-id")) + 1);
    });

    $("#learn-end-practice-btn").click(function() {
        window.location.href = "/learn/1";
    });

    $("#learn-end-next-btn").click(function() {
        window.location.href = "/quiz/1";
    });
})
