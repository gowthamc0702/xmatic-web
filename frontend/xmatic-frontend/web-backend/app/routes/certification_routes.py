from app import db
from functools import wraps
from flask import Blueprint, jsonify, request
#from app.auth.authentication import is_valid_api_key
from app.controllers.certification_controller import get_certifications_controller
from app.controllers.certification_controller import CandidateController
from app.controllers.certification_controller import ContactController
from app.controllers.certification_controller import AskMeController
from app.services.certification_service import validate_phone_number, validate_date
from config import db_params  

certification_view = Blueprint("certification_view", __name__)   
@certification_view.route('/certifications', methods=['GET'])
#@api_key_required
def get_certifications_endpoint():
    try:
        #api_key = request.headers.get('Authorization')
        certification_data = get_certifications_controller()
        return jsonify(certification_data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500



candidate_bp = Blueprint('candidate', __name__)
@candidate_bp.route('/add', methods=['POST'])
def add_candidate():
    try:
        data = request.json

        # Validate phone number
        if not validate_phone_number(data['phone_number']):
            return jsonify({"error": "Invalid phone number"}), 400

        # Validate expected_doj
        if not validate_date(data['expected_doj']):
            return jsonify({"error": "Invalid date"}), 400

        # Create the controller with db_params
        controller = CandidateController(db_params)

        if controller.add_candidate(data):
            return jsonify({"message": "Candidate details added successfully"}), 201
        else:
            return jsonify({"error": "Failed to add candidate"}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

contact_bp = Blueprint('contact', __name__)
@contact_bp.route('/vision_mission', methods=['GET'])
def get_vision_and_mission():
    try:
        # Create the controller with db_params
        controller = ContactController(db_params)
        data = controller.get_vision_and_mission()

        if "error" in data:
            return jsonify(data), 500
        else:
            return jsonify(data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


ask_me_bp = Blueprint('ask_me', __name__)
@ask_me_bp.route('/post_question', methods=['POST'])
def post_question():
    try:
        data = request.json
        phone_number = data.get('phone_number')
        email_id = data.get('email_id')
        question = data.get('question')
        print(question)
        # Ensure that either phone number or email ID is provided
        if not (phone_number or email_id):
            return jsonify({"error": "Either phone number or email ID is required"}), 400

        # Create the controller with db_params
        controller = AskMeController(db_params)
        response_data, status_code = controller.post_question(phone_number, email_id, question)
        return jsonify(response_data), status_code
    except Exception as e:
        return jsonify({"error": str(e)}), 500