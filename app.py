import os

from flask import (Flask, redirect, render_template, request,
                   send_from_directory, url_for)

app = Flask(__name__)


@app.route('/')
def index():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'index.html')


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')


@app.route('/api/hello', methods=['GET'])
def hello():
    name = request.args.get('name')
    return {'name': name}


@app.route('/api/hello', methods=['POST'])
def hello():
    name = request.form.get('name')
    return {'name': name}


@app.route('/<path:path>')
def static_assets(path):
    return send_from_directory(os.path.join(app.root_path, 'static'), path)


if __name__ == '__main__':
    app.run()
