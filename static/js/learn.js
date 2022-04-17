$(document).ready(function() {
    save_user_data([], window.location.pathname)

    $("#learn-intro-next-btn").click(function() {
        window.location.href = "/learn/2"
    });

    $("#learn-lesson-next-btn").click(function() {
        window.location.href = "/learn/" + (parseInt($(this).attr("data-current-id")) + 1)
    });

    $("#learn-end-practice-btn").click(function() {
        window.location.href = "/learn/1"
    });

    $("#learn-end-next-btn").click(function() {
        window.location.href = "/quiz/1"
    });
})

function save_user_data(quiz_choices, current_page) {
    user_data = {
                "quiz_choices": quiz_choices,
                "current_page": current_page
                }
    
    $.ajax({
        type: "POST",
        url: "/save_user_data",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({"user_data": user_data}),
        success: function(result){
            console.log("save successful")
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request);
            console.log(status);
            console.log(error);
    }});
}