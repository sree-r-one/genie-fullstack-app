@echo off

@echo Activating virtual environment...
@REM activate virtual environment
call .\server_py\venv\Scripts\activate.bat

@REM start backend FastAPI
cd .\server_py

@echo Starting backend FastAPI server...
uvicorn server:app --reload