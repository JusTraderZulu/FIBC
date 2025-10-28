#!/bin/bash

# Faith International Baptist Convention Inc. - Development Server Startup Script
# This script ensures the development environment is properly set up and starts the Next.js server

set -e  # Exit on any error

echo "🚀 Starting Faith International Baptist Convention Inc. Website Development Server"
echo "=================================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the project root directory."
    echo "💡 Try running: cd apostolic-fellowship-draft"
    exit 1
fi

# Verify we're in the correct project
if ! grep -q "apostolic-fellowship-draft" package.json; then
    echo "❌ Error: This doesn't appear to be the apostolic-fellowship-draft project."
    echo "💡 Make sure you're in the correct directory."
    exit 1
fi

# Check Node.js version (requires Node 18+)
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Error: Node.js 18+ is required. Current version: $(node --version)"
    echo "💡 Please upgrade Node.js to version 18 or higher."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Check if node_modules exists and has Next.js
if [ ! -d "node_modules" ] || [ ! -f "node_modules/.bin/next" ]; then
    echo "⚠️  Dependencies not found or incomplete. Installing..."
    npm install
    echo "✅ Dependencies installed successfully"
else
    echo "✅ Dependencies already installed"
fi

# Verify Next.js is available
if [ ! -f "node_modules/.bin/next" ]; then
    echo "❌ Error: Next.js not found in node_modules"
    echo "💡 Try running: npm install"
    exit 1
fi

echo "✅ Next.js found: $(node_modules/.bin/next --version)"

# Check for any existing processes on port 3000
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo "⚠️  Port 3000 is already in use. Attempting to kill existing process..."
    lsof -ti:3000 | xargs kill -9 2>/dev/null || true
    sleep 2
fi

# Clear Next.js cache if it exists
if [ -d ".next" ]; then
    echo "🧹 Clearing Next.js cache..."
    rm -rf .next
fi

echo ""
echo "🎯 Starting development server..."
echo "📍 Project: Faith International Baptist Convention Inc."
echo "🌐 URL: http://localhost:3000"
echo "⚡ Using Turbopack for fast development"
echo ""
echo "Press Ctrl+C to stop the server"
echo "=================================================================="

# Start the development server
exec npm run dev

