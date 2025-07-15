#!/bin/bash

# Fastcomm Production Deploy Script
# Usage: ./deploy.sh [environment]
# Example: ./deploy.sh production

set -e

ENVIRONMENT=${1:-production}
COMPOSE_FILE="docker-compose.prod.yml"

echo "🚀 Starting Fastcomm deployment for $ENVIRONMENT environment..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

# Check if required files exist
if [ ! -f "$COMPOSE_FILE" ]; then
    echo "❌ $COMPOSE_FILE not found!"
    exit 1
fi

if [ ! -f ".env.production" ]; then
    echo "❌ .env.production not found!"
    exit 1
fi

# Load environment variables
export $(cat .env.production | grep -v '^#' | xargs)

echo "📦 Building Docker images..."
docker-compose -f $COMPOSE_FILE build --no-cache

echo "🛑 Stopping existing containers..."
docker-compose -f $COMPOSE_FILE down

echo "🔄 Starting new containers..."
docker-compose -f $COMPOSE_FILE up -d

echo "⏳ Waiting for containers to be ready..."
sleep 30

# Health check
echo "🏥 Performing health checks..."
if curl -f http://localhost:3001/health > /dev/null 2>&1; then
    echo "✅ Backend health check passed"
else
    echo "❌ Backend health check failed"
    exit 1
fi

if curl -f http://localhost/health > /dev/null 2>&1; then
    echo "✅ Frontend health check passed"
else
    echo "❌ Frontend health check failed"
    exit 1
fi

echo "📊 Container status:"
docker-compose -f $COMPOSE_FILE ps

echo "📝 Deployment logs:"
docker-compose -f $COMPOSE_FILE logs --tail=50

echo "🎉 Deployment completed successfully!"
echo "🌐 Application is available at: https://www.fastcomm.com.br"
echo "📊 Health check: https://www.fastcomm.com.br/health"
echo "🔍 API health: https://www.fastcomm.com.br/api/health"

# Cleanup old images
echo "🧹 Cleaning up old Docker images..."
docker image prune -f

echo "✅ All done!"