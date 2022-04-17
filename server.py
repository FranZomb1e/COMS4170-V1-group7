import datetime
import json

from flask import Flask, session
from flask import render_template
from flask import Response, request, jsonify

app = Flask(__name__)

app.secret_key = "123456"


@app.before_request
def session_permanent():
    session.permanent = True


tutorial_data = {
    1: {"img": "learn_img.png", "title": "Eight Principles of Yong", "practice": False,
        "text":
            r"""All eight categories of Chinese strokes can be shown in the character 'Yong.' These categories will be used along with the six general rules in our stroke order tutorials.

You can click “Next” to start the tutorials or skip to a specific tutorial by clicking the submenu under “Learn” in the menu bar."""},
    2: {"img": "rule1.gif", "title": "", "practice": True, "rule_name": "Top to bottom",
        "text": r""""""},
    3: {"img": "rule2.gif", "title": "", "practice": True, "rule_name": "Left to right",
        "text": r""""""},
    4: {"img": "rule3.gif", "title": "", "practice": True, "rule_name": "First horizontal,<br>then vertical",
        "text": r""""""},
    5: {"img": "rule4.gif", "title": "", "practice": True, "rule_name": "First right-to-left diagonals,<br>then left-to-right diagonals",
        "text": r""""""},
    6: {"img": "rule5.gif", "title": "", "practice": True, "rule_name": "Center comes first in vertically<br>symmetrical characters",
        "text": r""""""},
    7: {"img": "rule6.gif", "title": "", "practice": True, "rule_name": "Move from outside to inside<br>and close frames last",
        "text": r""""""},
}

# index starts from 0
quiz_data = {
    0: {"correct_answer": 1, "text": "Please select the correct stroke order for the character above.",
        "answers": ["2, 1, 4, 3", "4, 1, 3, 2", "3, 4, 1, 2", "4, 3, 1, 2"], "img": "..."},
    1: {"correct_answer": 2, "text": "Please select the correct stroke order for the character above.",
        "answers": ["2, 3, 5, 1, 4", "4, 3, 5, 1, 2", "4, 1, 3, 2, 5", "1, 2, 5, 4, 3"], "img": "..."},
    2: {"correct_answer": 3, "text": "Please select the correct stroke order for the character above.",
        "answers": ["6, 1, 4, 2, 3, 5", "4, 2, 6, 3, 5, 1", "4, 2, 3, 5, 6, 1", "6, 4, 2, 1, 3, 5"], "img": "..."},
}


# ROUTES
@app.route('/')
def home():
    return render_template('home.html')


@app.route('/learn/1')
def learnIntro():
    return render_template('learn_intro.html')


@app.route('/learn/<learn_id>')
def learnLesson(learn_id=None):
    return render_template('learn_lesson.html', data=tutorial_data[int(learn_id)], id=learn_id, rule_id=int(learn_id)-1)


@app.route('/learn/8')
def learnEnd():
    return render_template('learn_end.html')


# AJAX routes

@app.route("/check_answer", methods=['POST'])
def check_answer():
    quiz_id = request.json["quiz_id"]
    quiz_choice = request.json["quiz_choice"]
    quiz_id = int(quiz_id)
    quiz_choice = int(quiz_choice)
    if quiz_id not in quiz_data:
        return json.dumps({"err": "quiz does not exist"})
    else:
        return json.dumps({"err": "ok", "correct": quiz_data[quiz_id]["correct_answer"] == quiz_choice})


@app.route("/check_answers", methods=['POST'])
def check_answers():
    quiz_choices = request.json["quiz_choices"]
    correct_cnt = 0
    wrong_id = []
    for i in range(0, 3):
        if quiz_data[i]["correct_answer"] == quiz_choices[i]:
            correct_cnt += 1
        else:
            wrong_id.append(i)

    return json.dumps({"err": "ok", "correct_cnt": correct_cnt, "wrong_id": wrong_id})


@app.route("/save_user_data", methods=['POST'])
def save_user_data():
    user_data = request.json["user_data"]
    session["user_data"] = user_data
    return json.dumps({"err": "ok"})


@app.route("/get_user_data", methods=['GET'])
def get_user_data():
    return json.dumps({"err": "ok", "user_data": session.get('user_data')})


if __name__ == '__main__':
    app.run(debug=True)
