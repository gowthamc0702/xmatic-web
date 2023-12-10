# app/services/contact_details_service.py
from app.models.contact_details_model import ContactDetails

def get_location_details():
    try:
        details = ContactDetails.query.first()  # Assuming you have only one row in the table
        if details:
            return {
                "number_of_accelerators": details.number_of_accelerators,
                "number_of_locations": details.number_of_locations,
                "number_of_distributors": details.number_of_distributors,
                "number_of_franchise": details.number_of_franchise,
            }
        else:
            return {}
    except Exception as e:
        raise e



def get_specific_contact_details():
    try:
        details = ContactDetails.query.first()  # Assuming you have only one row in the table
        if details:
            return {
                "phone_number": details.phone_number,
                "email_id": details.email_id,
                "youtube": details.youtube,
                "facebook": details.facebook,
                "twitter": details.twitter,
            }
        else:
            return {}
    except Exception as e:
        raise e
