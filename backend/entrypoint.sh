#!/bin/sh

echo "⏳ Waiting for PostgreSQL to become available at $POSTGRES_HOST:$POSTGRES_PORT..."
while ! nc -z $POSTGRES_HOST $POSTGRES_PORT; do
  sleep 1
done

echo "✅ PostgreSQL is up and running!"

echo "🗂️ Running database migrations..."
python manage.py migrate --noinput

echo "📁 Collecting static files..."
python manage.py collectstatic --noinput

echo "🚀 Starting Gunicorn server..."
gunicorn core.wsgi:application --bind 0.0.0.0:8000