from flask import Flask, render_template

def create_app():
    app = Flask(__name__, instance_relative_config=True)

    @app.route("/hello")
    def hello():
        return render_template("hello.html")

    return app
