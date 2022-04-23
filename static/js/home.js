
$(document).ready(function() {
    // redirect old user to previous saved page
    redirect_if_not_new_user();

    // direct user to learn intro page
    $("#home-start-btn").click(function() {
        window.location.href = "/learn/1";
    });
})
