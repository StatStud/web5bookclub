from flask import Flask, render_template, request
import script


app = Flask(__name__)
#,methods=['POST', 'GET']
#if request.method == "POST"
@app.route("/")
def index():
    script.get_data()
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)