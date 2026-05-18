from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)

def conectar_db():
    conn = sqlite3.connect("enem.db")
    conn.row_factory = sqlite3.Row
    return conn

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/questoes")
def questoes():
    conn = conectar_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM questoes LIMIT 10")
    dados = cursor.fetchall()
    return render_template("questoes.html", questoes=dados)

@app.route("/api/questoes")
def api_questoes():
    conn = conectar_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM questoes")
    dados = cursor.fetchall()
    resultado = [dict(q) for q in dados]
    return jsonify(resultado)

if __name__ == "__main__":
    app.run(debug=True)
