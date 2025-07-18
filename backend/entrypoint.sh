#!/bin/sh

# Apply database migrations
echo "Applying database migrations..."
python manage.py migrate --noinput

# Collect static files (optional)
echo "Collecting static files..."
python manage.py collectstatic --noinput

# Start Gunicorn server
echo "Starting Gunicorn..."
gunicorn core.wsgi:application --bind 0.0.0.0:8000
