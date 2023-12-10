# app/controllers/certification_controller.py
from flask import Blueprint, jsonify, request
from app.services.certification_service import get_certifications
import json
import logging
from app import db
from app.models.certification_model import CandidateModel
from app.models.certification_model import ContactModel
from app.models.certification_model import AskMeModel

def get_certifications_controller():
    try:
        # api_key = request.headers.get('Authorization')
        certification_data = get_certifications()  # Pass the API key to the service function
        return json.dumps(certification_data)
    except Exception as e:
        return json.dumps({"error": str(e)}), 500



class CandidateController:
    def __init__(self, db_params):
        self.db_params = db_params
        self.model = CandidateModel(db_params)

    def add_candidate(self, candidate_data):
        return self.model.add_candidate(candidate_data)

class ContactController:
    def __init__(self, db_params):
        self.model = ContactModel(db_params)

    def get_vision_and_mission(self):
        return self.model.get_vision_and_mission()



class AskMeController:
    def __init__(self, db_params):
        self.model = AskMeModel(db_params)

    def post_question(self, phone_number, email_id, question):
        return self.model.post_question(phone_number, email_id, question)



