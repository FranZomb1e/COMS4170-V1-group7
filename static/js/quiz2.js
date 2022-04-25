let user_answers = [0,0,0,0,0,0];

function getUserAnswer( ui, position){

    user_answers[position - 1] = ui.draggable[0].getAttribute("id").split("_")[1];
    console.log(user_answers)
}

function getUserAnswers( ){
    let final_answers = "";
    for( let i = 0; i < user_answers.length - 1; i++){
        final_answers = final_answers + user_answers[i] + ", ";
    }
    final_answers = final_answers + user_answers[5];

    if ( final_answers == $('.stroke').attr('correct_position') )
    {
        return "3";
    }
    else{
        return "0";
    }
}


$(document).ready(function() {
    save_current_page(window.location.pathname);
    check_quiz_from_user_data(function(result) {
        $('#score__').text(result)
    }, function() {

    })

    $("#quiz-intro-next-btn").click(function() {
        window.location.href = "/quiz/1"
    });

    
    $("#quiz-end-next-btn").click(function() {
        window.location.href = "/quiz/4"
    });


    $("#quiz-next-btn").click(function() {
        save_quiz_choice($(this).attr("data-current-id"), getUserAnswers() )
        window.location.href = "/quiz/" + (parseInt($(this).attr("data-current-id")) + 1)
    });

    $('#position1').droppable({
        accept: ".stroke",
        over: function (event, ui) {
        },
        drop: function (event, ui) {
            getUserAnswer(ui, 1)
            $('.stroke').draggable({
                start: function (event, ui) {
                }
            })
        }
    })
    
    $('#position2').droppable({
        accept: ".stroke",
        over: function (event, ui) {
        },
        drop: function (event, ui) {
            getUserAnswer(ui, 2)
        }
    })
    $('#position3').droppable({
        accept: ".stroke",
        over: function (event, ui) {
        },
        drop: function (event, ui) {
            getUserAnswer(ui, 3)
        }
    })
    $('#position4').droppable({
        accept: ".stroke",
        over: function (event, ui) {
        },
        drop: function (event, ui) {
            getUserAnswer(ui, 4)
        }
    })
    $('#position5').droppable({
        accept: ".stroke",
        over: function (event, ui) {
        },
        drop: function (event, ui) {
            getUserAnswer(ui, 5)
        }
    })

    $('#position6').droppable({
        accept: ".stroke",
        over: function (event, ui) {
        },
        drop: function (event, ui) {
            getUserAnswer(ui, 6)
        }
    })

    
    

    $('.stroke').draggable( {
        start: function(event,ui){
        }
    })
})
