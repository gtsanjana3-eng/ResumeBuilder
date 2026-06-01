from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home():
    resume = None

    if request.method == "POST":
        resume = {
            "name": request.form["name"],
            "email": request.form["email"],
            "phone": request.form["phone"],
            "education": request.form["education"],
            "skills": request.form["skills"]
        }

    return render_template("index.html", resume=resume)

if __name__ == "__main__":
    app.run(debug=True)