let global_user_quiz_choices = [-1, -1, -1];
let global_user_current_page = "";
let global_redirected = false;

function save_current_page(current_page) {
    global_user_current_page = current_page
    save_user_data({"quiz_choices": global_user_quiz_choices, "current_page": global_user_current_page}, function (r) {
        console.log("Save current page okay.", r);
    })
}

function save_quiz_choices(quiz_choices) {
    global_user_quiz_choices = quiz_choices
    save_user_data({"quiz_choices": global_user_quiz_choices, "current_page": global_user_current_page}, function (r) {
        console.log("Save current page okay.", r);
    })
}

function redirect_if_not_new_user() {
    if (!global_redirected) {
        global_redirected = true;
        get_user_data(function (result) {
            if (result["user_data"]["current_page"]) {
                window.location.href = result["user_data"]["current_page"];
            }
        })
    }
}

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
