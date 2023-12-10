# app/models/contact_details_model.py
from app import db

class ContactDetails(db.Model):
    __tablename__ = 'contact_details'

    contact_id = db.Column(db.Integer, primary_key=True)
    organisation_name = db.Column(db.String(255))
    number_of_accelerators = db.Column(db.Integer)
    phone_number = db.Column(db.String(20))  # Added phone_number column
    email_id = db.Column(db.String(255))      # Added email_id column
    number_of_locations = db.Column(db.Integer)
    number_of_distributors = db.Column(db.Integer)
    number_of_franchise = db.Column(db.Integer)
    youtube = db.Column(db.String(255))       # Added youtube column
    facebook = db.Column(db.String(255))      # Added facebook column
    twitter = db.Column(db.String(255))       # Added twitter column
    # Add other columns here
