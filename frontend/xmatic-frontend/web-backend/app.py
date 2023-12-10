import logging
import sys
import os
from config import db_params
from flask import Flask
from app import db
from flask_sqlalchemy import SQLAlchemy
from app.routes.certification_routes import candidate_bp
from app.routes.certification_routes import certification_view
from app.routes.certification_routes import contact_bp
from app.routes.certification_routes import ask_me_bp
from app.routes.contact_details_routes import contact_details_view
from flask_cors import CORS  
from config import Config

project_folder = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, project_folder)
# Configure logging
logging.basicConfig(filename='app.log', level=logging.INFO)  # Adjust the log file name and log level as needed


app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)

# Enable CORS for all routes
CORS(app)

app.register_blueprint(certification_view, url_prefix='/about_us')
app.register_blueprint(candidate_bp, url_prefix='/about_us/candidate')
app.register_blueprint(contact_bp, url_prefix='/about_us/contact')
app.register_blueprint(contact_details_view, url_prefix='/about_us')
app.register_blueprint(ask_me_bp, url_prefix='/about_us/ask_me')

if __name__ == '__main__':
    try:
        for rule in app.url_map.iter_rules():
            print(rule)
        app.run()
    except Exception as e:
        print(f"Error: {str(e)}")
    finally:
        db.session.remove()  # Close the database connection

