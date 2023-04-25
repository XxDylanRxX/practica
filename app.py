from flask import Flask, render_template, url_for
from flask_socketio import emit, join_room, SocketIO

app = Flask (__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route("/")
def index():
    return render_template("index.html")

@socketio.on("message")
def message(data):
    emit("message", data['message'],broadcast=False, include_self=True)

    