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


# all index starts from 0
quiz_data = {
    0: {"correct_answer": 1, "text": "...", "answers": ["..."], "img": "..."},
    1: {"correct_answer": 2, "text": "...", "answers": ["..."], "img": "..."},
    2: {"correct_answer": 3, "text": "...", "answers": ["..."], "img": "..."},
}


# ROUTES
@app.route('/')
def home():
    return render_template('home.html')


@app.route('/learn/1')
def learnIntro():
    return render_template('learn_intro.html')


@app.route('/learn/2')
def learnLesson():
    return render_template('learn_lesson.html')


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
