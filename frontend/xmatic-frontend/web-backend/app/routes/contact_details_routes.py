from flask import Blueprint, jsonify
import json
from app.controllers.contact_details_controller import get_location_details_endpoint, get_contact_details_controller, get_specific_contact_details_controller


contact_details_view = Blueprint("contact_details_view", __name__)

@contact_details_view.route('/contact_details', methods=['GET'])
def get_contact_details_endpoint():
    try:
        contact_details_data = get_contact_details_controller()
        return json.dumps(contact_details_data)
    except Exception as e:
        return json.dumps({"error": str(e)}), 500



@contact_details_view.route('/contact_details/specific',methods=['GET'])
def get_specific_contact_details_endpoint():
    try:
        specific_details_data=get_specific_contact_details_controller()
        return json.dumps(specific_details_data)
    except Exception as e:
        return json.dumps({"error":str(e)}), 500