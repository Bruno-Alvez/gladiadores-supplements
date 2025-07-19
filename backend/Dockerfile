# Dockerfile for Django project with Gunicorn and production runtime setup

FROM python:3.11

# Environment configuration
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /code

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    netcat-openbsd \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt /code/
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy project files
COPY . /code/

# Grant execution permission to the entrypoint script
RUN chmod +x /code/entrypoint.sh

# Define entrypoint script
ENTRYPOINT ["/code/entrypoint.sh"]