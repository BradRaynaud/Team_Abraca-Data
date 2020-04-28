# compose_flask/app.py
from flask import Flask

app = Flask(__name__)

@app.route('/')

# Route for preliminary testing of my algorithm
# Will provide no input and recieve the test version of my answer
@app.route('/HelloWorld',methods=['GET', 'POST'])
def datamining():
    plan = genPlan()
    return plan


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)


