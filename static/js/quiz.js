function check_answer(quiz_id, quiz_choice, on_success) {
    $.ajax({
        type: "POST",
        url: "/check_answer",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify({'quiz_id': quiz_id, "quiz_choice": quiz_choice}),
        success: function(result){
            on_success(result);
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request);
            console.log(status);
            console.log(error);
    }});
}

function check_answers(quiz_choices, on_success) {
    $.ajax({
        type: "POST",
        url: "/check_answers",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify({"quiz_choices": quiz_choices}),
        success: function(result){
            on_success(result);
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request);
            console.log(status);
            console.log(error);
    }});
}

function save_user_data(user_data, on_success) {
    $.ajax({
        type: "POST",
        url: "/save_user_data",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify({"user_data": user_data}),
        success: function(result){
            on_success(result);
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request);
            console.log(status);
            console.log(error);
    }});
}


function get_user_data(on_success) {
    $.ajax({
        type: "GET",
        url: "/get_user_data",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify({}),
        success: function(result){
            on_success(result);
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request);
            console.log(status);
            console.log(error);
    }});
}
