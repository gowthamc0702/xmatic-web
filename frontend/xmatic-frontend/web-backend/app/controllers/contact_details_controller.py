from flask import Blueprint, jsonify
from app.services.contact_details_service import get_location_details
from app.services.contact_details_service import get_specific_contact_details
import json

contact_details_blueprint = Blueprint("contact_details", __name__)

@contact_details_blueprint.route('/contact_details', methods=['GET'])
def get_location_details_endpoint():
    try:
        location_details = get_location_details()
        return json.dumps(location_details)
    except Exception as e:
        return json.dumps({"error": str(e)}), 500

@contact_details_blueprint.route('/contact_details/all', methods=['GET'])
def get_contact_details_controller():
    try:
        contact_details_data = get_location_details()
        return json.dumps(contact_details_data)
    except Exception as e:
        return json.dumps({"error": str(e)}), 500


@contact_details_blueprint.route('/contact_details/specific', methods=['GET'])  # New route for specific details
def get_specific_contact_details_controller():
    try:
        specific_details = get_specific_contact_details()
        return json.dumps(specific_details)
    except Exception as e:
        return json.dumps({"error": str(e)}), 500