#!/bin/bash

# Five Windows Deployment Script
# This script deploys the Five Windows website to the Contabo server

set -e

echo "🚀 Starting Five Windows deployment..."

# Configuration
REPO_URL="https://github.com/viuppalapati/the-five-windows.git"
PROJECT_DIR="/root/the-five-windows"
CONTAINER_NAME="five-windows-website"
PORT="3081"

# Check if directory exists
if [ -d "$PROJECT_DIR" ]; then
    echo "📂 Project directory exists. Pulling latest changes..."
    cd "$PROJECT_DIR"
    git pull origin main
else
    echo "📂 Cloning repository..."
    git clone "$REPO_URL" "$PROJECT_DIR"
    cd "$PROJECT_DIR"
fi

# Stop and remove existing container if it exists
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "🛑 Stopping existing container..."
    docker stop $CONTAINER_NAME || true
    docker rm $CONTAINER_NAME || true
fi

# Remove old image if exists
if [ "$(docker images -q five-windows-website)" ]; then
    echo "🗑️  Removing old image..."
    docker rmi five-windows-website || true
fi

# Build and start the container
echo "🔨 Building Docker image..."
docker-compose build

echo "🚀 Starting container..."
docker-compose up -d

echo "✅ Deployment complete!"
echo "🌐 Website is now running on port $PORT"
echo "🔗 Access it at: http://62.84.186.139:$PORT"

