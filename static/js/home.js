
$(document).ready(function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get('redirect') != "false") {
        redirect_if_not_new_user();
    }
    $("#home-start-btn").click(function() {
        window.location.href = "/learn/1";
    });
})
