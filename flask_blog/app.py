import numpy as np
import pandas as pd
import sqlite3

from flask import Flask, render_template 
#################################################
# Flask Setup
#################################################
app = Flask(__name__)

conn = sqlite3.connect('/Users/annamarieestores/Documents/Project3/flask_blog/Resources/proj3.sqlite')
c = conn.cursor()
data = c.execute('''SELECT * FROM crash_by_city''').fetchall() 
data2 = c.execute('''SELECT * FROM fatal_crashes''').fetchall() 
data3 = c.execute('''SELECT * FROM fatal_crashes_by_month''').fetchall() 
#################################################
# Flask Routes
#################################################
@app.route("/")
def welcome():
    return render_template("index.html", data=data,data2=data2,data3=data3)

if __name__ == '__main__':
    app.run(debug=True)
