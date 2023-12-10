from app import db
import psycopg2
from psycopg2 import sql

class Certification(db.Model):
    __tablename__ = 'certification_details'  # Specify the table name

    certificate_id = db.Column(db.Integer, primary_key=True)
    certificate_img_link = db.Column(db.String(255), nullable=True)
    certificate_name = db.Column(db.String(255), nullable=False)
    certificate_expirydate = db.Column(db.Date, nullable=True)
    certificate_briefinfo = db.Column(db.Text, nullable=True)
    certificate_ref_links = db.Column(db.Text, nullable=True)
    organisation = db.Column(db.String(255), nullable=True)
    status = db.Column(db.Integer, default=1)


class CandidateModel:
    def __init__(self, db_params):
        self.db_params = db_params

    def add_candidate(self, candidate_data):
        try:
            connection = psycopg2.connect(**self.db_params)
            cursor = connection.cursor()

            insert_query = sql.SQL("""
                INSERT INTO candidate_details 
                (phone_number, years_of_exp, expected_doj, resume_link)
                VALUES
                (%s, %s, %s, %s)
            """)

            cursor.execute(insert_query, (
                candidate_data['phone_number'],
                candidate_data['years_of_exp'],
                candidate_data['expected_doj'],
                candidate_data['resume_link']
            ))

            connection.commit()
            cursor.close()
            connection.close()

            return True
        except Exception as e:
            print("Error:", e)
            return False

class ContactModel:
    def __init__(self, db_params):
        self.db_params = db_params

    def get_vision_and_mission(self):
        try:
            connection = psycopg2.connect(**self.db_params)
            cursor = connection.cursor()

            select_query = sql.SQL("""
                SELECT vision, mission FROM contact_details WHERE contact_id = 1
            """)

            cursor.execute(select_query)
            vision, mission = cursor.fetchone()

            cursor.close()
            connection.close()

            return {"vision": vision, "mission": mission}
        except Exception as e:
            print("Error:", e)
            return {"error": "Failed to retrieve data"}

class AskMeModel:
    def __init__(self, db_params):
        self.db_params = db_params

    def post_question(self, phone_number, email_id, question):
        try:
            connection = psycopg2.connect(**self.db_params)
            cursor = connection.cursor()

            insert_query = """
                INSERT INTO ask_me_questions 
                (phone_number, email_id, question)
                VALUES (%s, %s, %s)
            """

            cursor.execute(insert_query, (phone_number, email_id, question))
            connection.commit()

            cursor.close()
            connection.close()

            return {"message": "Question posted successfully"}, 201
        except Exception as e:
            print("Error:", e)
            return {"error": "Failed to post question"}, 500