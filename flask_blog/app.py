import numpy as np
import pandas as pd
import sqlite3

from flask import Flask, jsonify
from flask import Flask, render_template

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

conn = sqlite3.connect('Resources/proj3.db')
c = conn.cursor()
data = c.execute('''SELECT * FROM crash_by_city''').fetchall() 

#################################################
# Flask Routes
#################################################
@app.route("/")
def welcome():
    return render_template('index.html',data=data)

if __name__ == '__main__':
    app.run(debug=True)
