#!/bin/bash

# Build script for Afghankar.com
# This script ensures a clean build process for CI/CD environments

echo "🚀 Starting Afghankar.com build process..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18 or higher."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run TypeScript check
echo "🔍 Running TypeScript check..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Build artifacts are in the 'dist' directory"
    
    # List build files
    echo "📋 Build files:"
    ls -la dist/
    
    exit 0
else
    echo "❌ Build failed!"
    exit 1
fi
