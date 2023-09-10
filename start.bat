@REM call client.bat and server_py.bat
@echo off

@REM start client
start cmd /k "cd .\client && npm run dev"

@REM start server_py

start cmd /k "cd .\server_py && call venv\Scripts\activate.bat && uvicorn server:app --reload"
