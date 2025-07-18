# Dockerfile for Django API with Gunicorn and automatic setup
FROM python:3.11-slim

# Environment variables to improve performance and logging
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set the working directory
WORKDIR /code

# Install system dependencies (gcc and others needed by psycopg2)
RUN apt-get update && apt-get install -y \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt /code/
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy project files into the container
COPY . /code/

# Run migrations and collectstatic (in case static files are needed)
RUN python manage.py migrate --noinput && \
    python manage.py collectstatic --noinput

# Start Gunicorn server
CMD ["gunicorn", "core.wsgi:application", "--bind", "0.0.0.0:8000"]