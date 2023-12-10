from flask import Blueprint
from app.controllers.certification_controller import get_certifications_controller, award_certificate_controller
from app.controllers.contact_details_controller import get_contact_details_controller

certification_view = Blueprint("certification_view", __name__)
contact_details_view=Blueprint("contact_details_view",__name__)

# Define your routes using the blueprint
certification_view.add_url_rule('/certifications', 'get_certifications_endpoint', get_certifications_controller, methods=['GET'])
certification_view.add_url_rule('/certifications/award/<int:certificate_id>', 'award_certificate_endpoint', award_certificate_controller, methods=['POST'])
contact_details_view.add_url_rule('/contact_details', 'get_contact_details_endpoint', get_contact_details_controller, methods=['GET'])
contact_details_view.add_url_rule('/contact_details/all', 'get_contact_details_endpoint', get_contact_details_controller, methods=['GET'])
contact_details_view.add_url_rule('/specific', 'get_specific_contact_details_endpoint', get_specific_contact_details_endpoint, methods=['GET'])