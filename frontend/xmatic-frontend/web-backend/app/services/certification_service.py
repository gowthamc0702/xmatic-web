from app import db
from datetime import datetime, timedelta
import re

def get_certifications():
    from app.models.certification_model import Certification
    try:
        certifications = Certification.query.filter_by(status=1).all()
        print(type(certifications))

        certification_list = [{
            "certificate_id": cert.certificate_id,
            "certificate_img_link": cert.certificate_img_link.strip(),
            "certificate_name": cert.certificate_name,
            "certificate_expirydate": cert.certificate_expirydate.strftime('%Y-%m-%d'),
            "certificate_briefinfo": cert.certificate_briefinfo,
            "certificate_ref_links": cert.certificate_ref_links,
            "organisation": cert.organisation,
            "status": cert.status 
        } for cert in certifications]
        return certification_list
    except Exception as e:
        raise e

def validate_phone_number(phone_number):
    # Check if the phone number is a 10-digit number
    pattern = r"^\d{10}$"
    return re.match(pattern, phone_number) is not None


def validate_date(date_string):
    try:
        parsed_date = datetime.strptime(date_string, '%Y-%m-%d')
        
        current_date = datetime.now()
        
        if parsed_date == current_date:
            return True
        elif parsed_date > current_date:
            return True
        else:
            return False
    except ValueError:
        return False

        
