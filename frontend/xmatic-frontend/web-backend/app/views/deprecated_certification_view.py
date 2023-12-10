# app/views/certification_view.py

from flask import Blueprint, jsonify
from app.controllers.certification_controller import CertificationController

certification_view = Blueprint("certification_view", __name__)

@certification_view.route('/certifications', methods=['GET'])
def get_certifications():
    try:
        certification_data = CertificationController.get_certifications()
        return jsonify(certification_data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500