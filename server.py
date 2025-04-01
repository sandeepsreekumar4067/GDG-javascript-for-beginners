from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

@app.get("/")
async def return_false():
    return False  # Returning a boolean value



# Define a request model
class UserData(BaseModel):
    name: str
    age: int
    email: str
    skills: list[str]

@app.post("/submit")
async def receive_data(user: UserData):
    print("Received Data:", user.dict())  # Print to terminal
    return {"message": "Data received successfully", "data": user}

# Run this with: uvicorn filename:app --reload
