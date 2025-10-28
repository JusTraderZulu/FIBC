#!/bin/bash

# Quick Start Script - Faith International Baptist Convention Inc.
# Simple script to start the development server without extensive checks

echo "🚀 Quick Starting FIBC Website..."

# Navigate to project directory if needed
if [ ! -f "package.json" ]; then
    if [ -d "apostolic-fellowship-draft" ]; then
        cd apostolic-fellowship-draft
        echo "📁 Navigated to apostolic-fellowship-draft directory"
    else
        echo "❌ Error: Cannot find project directory"
        exit 1
    fi
fi

# Kill any existing process on port 3000
lsof -ti:3000 | xargs kill -9 2>/dev/null || true

# Start the server
echo "🌐 Starting server at http://localhost:3000"
npm run dev

