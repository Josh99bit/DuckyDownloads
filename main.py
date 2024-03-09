from flask import Flask, send_file

app = Flask(__name__)

@app.route('/')
def download_file():
    path_to_file = "script.py"
    return send_file(path_to_file, as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True)