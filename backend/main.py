from fastapi import FastAPI, Request
from fastapi.responses import FileResponse
from pathlib import Path

app = FastAPI()

# Absolute path to index.html using Path
BASE_DIR = Path(__file__).resolve().parent
INDEX_PATH = BASE_DIR.parent / "frontend" / "dist" / "index.html"


@app.post("/app/{full_path:path}")
def serve_react_post(full_path: str, request: Request):
    return FileResponse(INDEX_PATH)


@app.get("/app/{full_path:path}")
def serve_react_get(full_path: str, request: Request):
    return FileResponse(INDEX_PATH)


@app.get("/api/reversed_str/{s}")
def get_button_name(s: str):
    return {"result": s[::-1]}
