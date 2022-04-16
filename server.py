from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

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

if __name__ == '__main__':
   app.run(debug = True)