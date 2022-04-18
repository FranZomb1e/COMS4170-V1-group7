score = 0

function check_answer(quiz_id, quiz_choice) {
    $.ajax({
        type: "POST",
        url: "/check_answer",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify({'quiz_id': quiz_id, "quiz_choice": quiz_choice}),
        success: function(result){
            console.log(result);
            if (result["correct"]){
                score = 1
            }else{
                score = 0
            }
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request);
            console.log(status);
            console.log(error);
    }});
}

function check_answers(quiz_choices) {
    $.ajax({
        type: "POST",
        url: "/check_answers",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify({"quiz_choices": quiz_choices}),
        success: function(result){
            console.log(result);
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request);
            console.log(status);
            console.log(error);
    }});
}

function save_user_data(user_data) {
    $.ajax({
        type: "POST",
        url: "/save_user_data",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify({"user_data": user_data}),
        success: function(result){
            console.log(result)
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request);
            console.log(status);
            console.log(error);
    }});
}


function get_user_data() {
    $.ajax({
        type: "GET",
        url: "/get_user_data",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify({}),
        success: function(result){
            console.log(result);
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request);
            console.log(status);
            console.log(error);
    }});
}

function update_score(score) {
    $.ajax({
        type: "POST",
        url: "/update_score",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify({"score": score}),
        success: function(response){
            console.log(response);
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request);
            console.log(status);
            console.log(error);
    }});
}


$(document).ready(function() {
    // save_user_data([], window.location.pathname)
    // get_user_data()

    $("#quiz-intro-next-btn").click(function() {
        window.location.href = "/quiz/1"
    });

    $("#quiz-next-btn").click(function() {
        window.location.href = "/quiz/" + (parseInt($(this).attr("data-current-id")) + 1)
        update_score(score)
    });

    $("#quiz-end-next-btn").click(function() {
        window.location.href = "/quiz/4"
    });

    $("#answer1").click(function() {
        check_answer($(this).attr("data-current-id"), "0")
    });
    $("#answer2").click(function() {
        check_answer($(this).attr("data-current-id"), "1")
    });
    $("#answer3").click(function() {
        check_answer($(this).attr("data-current-id"), "2")
    });
    $("#answer4").click(function() {
        check_answer($(this).attr("data-current-id"), "3")
    });
})