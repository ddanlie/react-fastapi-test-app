.PHONY: dev backend frontend run

dev:
	npx concurrently "make frontend" "make backend"

backend:
	cd backend && .venv/bin/python -m uvicorn main:app --host 127.0.0.1 --port 8000

frontend:
	cd frontend && npm run dev

run:
	cd backend && .venv/bin/python -m uvicorn main:app --host 127.0.0.1 --port 8000
