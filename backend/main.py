from fastapi import FastAPI
from pymongo import MongoClient
import os
from dotenv import load_dotenv

# Load .env file
load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

app = FastAPI()

# Connect to MongoDB
client = MongoClient(MONGO_URI)
db = client["fabric_dashboard"]
collection = db["garments"]

@app.get("/")
def root():
    return {"message": "Hello, Fabric Efficiency Dashboard is running!"}

@app.get("/garments")
def get_garments():
    garments = list(collection.find({}, {"_id": 0}))
    return garments