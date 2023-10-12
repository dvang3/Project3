import numpy as np
import pandas as pd
import sqlite3

from flask import Flask, render_template 
import json
#################################################
# Flask Setup
#################################################
app = Flask(__name__)

conn = sqlite3.connect('flask_blog/Resources/proj3.sqlite')
c = conn.cursor()
data = c.execute('''SELECT * FROM crash_data''').fetchall() 
#################################################
# Flask Routes
#################################################
@app.route("/")
def welcome():

    return render_template ('index.html', data=data)
    
if __name__ == '__main__':
    app.run(debug=True)
