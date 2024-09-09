PROJECT OVERVIEW
    
    This application serves as an online platform for managing products. 
    Users can register, log in, add products, and view product lists.

    The backend is developed using Django and Django REST Framework, 
    while the frontend is built with React and TypeScript, 
    following a modular and atomic design pattern 
    with Tailwind CSS for styling.

TECHNOLOGIES USED
    
    Backend: Django, Django REST Framework, PostgreSQL, Redis
    Frontend: React, TypeScript, Tailwind CSS
    Docker: Docker Compose to manage the entire environment
    Database: PostgreSQL
    Cache: Redis

-- Prerequisites

    Ensure you have the following tools installed on your machine:

    Docker: To run the application in containers.
    Node.js & npm: If you plan to run the frontend outside of Docker.
    Python 3.11+: If running the backend outside Docker.
    PostgreSQL: Required if you're not using Docker for the database.

SETTING UP THE PROJECT LOCALLY

    This project is designed to run using Docker for ease of setup. 
    However, instructions for manual setup are also provided.

BACKEND (Django)

-- Clone the Repository:

    git clone https://github.com/ATHICADIGITAL/full_stack_project.git
    cd full-stack-project/backend

-- Create a Virtual Environment:

    python -m venv venv
    
    # On Linux : source venv/bin/activate  
    # On Windows: source `venv\Scripts\activate`

-- Install Python Dependencies:

    pip install -r requirements.txt

-- Create .env File:
    
    Create a .env file in the backend directory to hold environment variables 
    (DB credentials, secret keys, etc.).

    Example .env file:

    SECRET_KEY=django-insecure-rp5%txxiv=g!n199k!7-x7ks=+excook)c0*5v5&7@yy6ugo)d
    DEBUG=True
    DB_NAME=full_stack_db
    DB_USER=postgres
    DB_PASSWORD=123
    DB_HOST=localhost
    DB_PORT=5432

-- Run Database Migrations:

    python manage.py migrate

-- Create a Superuser (for admin access):

    python manage.py createsuperuser

-- Run the Django Development Server:

    python manage.py runserver

    The backend will be accessible at http://127.0.0.1:8000.
    And the backend adminpage will be accesible at http://127.0.0.1:8000/admin/

FRONTEND (React)

-- Navigate to the frontend directory:

    cd ../frontend

-- Install Node.js Dependencies:

    npm install

-- Create .env File for Frontend:

    Create a .env file in the frontend directory 
    to configure environment variables for the frontend:

    REACT_APP_BACKEND_URL=http://127.0.0.1:8000/api/

-- Start the React Development Server:

    npm start   
    The frontend will be accessible at http://localhost:3000.

--Apply Migrations

    python manage.py makemigrations
    python manage.py migrate

DOCKER SETUP

    If you prefer to run the application using Docker,
    follow these steps:

-- Ensure Docker is Running:

    Verify that Docker is installed and running 
    on your machine by executing:

    docker --version

-- Build and Run the Docker Containers:

    docker-compose up --build

This will build and start the following services:
    
    web: The Django backend (running on port 8000).
    frontend: The React frontend (running on port 3000).
    db: PostgreSQL database.
    redis: Redis for caching.
    Access the Application:

Backend: http://127.0.0.1:8000
Frontend: http://localhost:3000

To stop the containers, run:

    docker-compose down

RUNNING THE APPLICATION
    
    After setting up the environment (either manually or with Docker), 
    the application can be accessed at the following URLs:

    Frontend (React): http://localhost:3000
    Backend (Django): http://127.0.0.1:8000
 
API ENDPOINTS

    Here are the key API endpoints for the Django backend:

Product Endpoints (/api/products/):

    GET /api/products/: Fetch all products.
    POST /api/products/: Add a new product (requires name, description, price, and category).
    PUT /api/products/:id: Update a product by ID.
    DELETE /api/products/:id: Delete a product by ID.

User Endpoints (/api/register/):

    POST /api/register/: Register a new user with a username, email, and password.
    POST /api/password-reset/: To send a password reset link via email.
    POST /api/login/: To authenticate users with JWT tokens (with username, password). 

Contact
If you encounter any issues or have questions, feel free to contact:

Developer: javier augusto alba
Email: javieraugustoalba@gmail.com

Important commands if you want to test the solution:

--TESTING THE ENDPOINTS
    
    python manage.py test

--RUNNING SERVER

    python manage.py runserver

--RUN REDIS CONTAINER

    docker-compose up -d redis

--RUN POSTGRESQL CONTAINER

    docker-compose up -d db 

--MANAGE POSTGRE CONTAINERS

    Stop containers: docker-compose stop [service_name] 
    Restart containers: docker-compose restart [service_name]
    Start containers: docker-compose start [service_name]
    Stop and remove containers: docker-compose down

-- CHECK CONTAINER STATUS
docker ps
-- CHECK CONTAINER LOGS
docker-compose logs db

-- START ALL DOCKERSERVICES  --- this works after the configuration of docker-compose build
docker-compose up -d


