from fastapi import FastAPI, Request
from fastapi.responses import FileResponse
import os

app = FastAPI()

@app.post("/app/{full_path:path}")
def serve_react_post(full_path: str, request: Request):
    return FileResponse("frontend/index.html")

@app.get("/app/{full_path:path}")
def serve_react_get(full_path: str, request: Request):
    return FileResponse("frontend/index.html")


@app.get("/api/reversed_str/{s}")
def get_button_name(s: str):
    return {"button_name": s[::-1]}