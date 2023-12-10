

import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL") or "postgresql://abhishekxmatic:8LrulHDsPi5z@ep-billowing-band-75093977.us-east-2.aws.neon.tech/neondb"
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    DEBUG=True
    
db_params = {
    "dbname": "neondb",
    "user": "abhishekxmatic",
    "password": "8LrulHDsPi5z",
    "host": "ep-billowing-band-75093977.us-east-2.aws.neon.tech",
    "port": "5432"
}