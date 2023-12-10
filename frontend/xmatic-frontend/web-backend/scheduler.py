# scheduler.py
from apscheduler.schedulers.background import BackgroundScheduler
from datetime import datetime
from app.models.certification_model import Certification
from app import db

scheduler = BackgroundScheduler()

# scheduler.py
@scheduler.scheduled_job('interval', hours=24)  # Check every 24 hours
def expire_certificates():
    try:
        current_date = datetime.now().date()
        certificates_to_expire = Certification.query.filter(Certification.expiry_date <= current_date, Certification.status == 1).all()

        for cert in certificates_to_expire:
            cert.status = 0  # Set the status to 0 for expired certificates

        db.session.commit()
    except Exception as e:
        db.session.rollback()

# Start the scheduler when your app starts
scheduler.start()
