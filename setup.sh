#!/bin/bash

# echo "📁 Creating backend folder and initializing..."

# mkdir -p backend
# cd backend

# npm init -y
# npm install express mongoose cors dotenv

echo "⚛️ Creating React frontend..."
npx create-react-app frontend

cd frontend
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

echo "✅ Setup complete!"