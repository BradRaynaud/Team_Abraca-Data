# compose_flask/app.py
from flask import Flask

app = Flask(__name__)

@app.route('/datamining')
def hello():
    print("Hello darkness my old friend")
    return "Hello World"


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)