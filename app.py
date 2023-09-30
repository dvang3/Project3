import numpy as np
import pandas as pd
import sqlite3

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///Resources/proj3.db")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(autoload_with=engine)

# Save reference to the table
# crash_by_city = Base.classes.crash_by_city
#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""

    conn = sqlite3.connect('Resources/proj3.db')
    c = conn.cursor()
    data = c.execute('''SELECT * FROM crash_by_city''').fetchall() 
    return (data
        # f"Available Routes:<br/>"
        # f"/api/v1.0/names<br/>"
        # f"/api/v1.0/passengers"
    )


# @app.route("/api/v1.0/names")
# def names():
#     # Create our session (link) from Python to the DB
#     session = Session(engine)

#     """Return a list of all passenger names"""
#     # Query all passengers
#     results = session.query(Passenger.name).all()

#     session.close()

#     # Convert list of tuples into normal list
#     all_names = list(np.ravel(results))

#     return jsonify(all_names)

if __name__ == '__main__':
    app.run(debug=True)
