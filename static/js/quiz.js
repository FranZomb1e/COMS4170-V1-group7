

$(document).ready(function() {
    save_current_page(window.location.pathname);
    check_quiz_from_user_data(function(result) {
        $('#score__').text(result)
    }, function() {

    })

    $("#quiz-intro-next-btn").click(function() {
        window.location.href = "/quiz/1"
    });

    $("#quiz-next-btn").click(function() {
        window.location.href = "/quiz/" + (parseInt($(this).attr("data-current-id")) + 1)
    });

    $("#quiz-end-next-btn").click(function() {
        window.location.href = "/quiz/4"
    });

    $("#answer1").click(function() {
        save_quiz_choice($(this).attr("data-current-id"), "0")
    });
    $("#answer2").click(function() {
        save_quiz_choice($(this).attr("data-current-id"), "1")
    });
    $("#answer3").click(function() {
        save_quiz_choice($(this).attr("data-current-id"), "2")
    });
    $("#answer4").click(function() {
        save_quiz_choice($(this).attr("data-current-id"), "3")
    });
})
