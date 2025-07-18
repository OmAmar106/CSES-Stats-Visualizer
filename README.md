# 📊 CSES Stats Visualizer

A web app to visualize your progress on the [CSES Problem Set](https://cses.fi/problemset/). Built with React, it parses your session HTML and presents section-wise problem completion stats in an intuitive dashboard.

## 🔧 Features

- 📁 Upload your **CSES HTML profile page**
- 📊 Visual breakdown of each section: Solved, Attempted, and Remaining
- 🥧 Interactive semi-circular pie charts

Live link: https://cses-stats-visualizer.vercel.app/output

## Screenshots

## Installation

### 1. Clone the repo
```bash
>> git clone https://github.com/OmAmar106/CSES-Stats-Visualizer.git
>> cd CSES-Stats-Visualizer/app
```

### 2. Install dependencies
```bash
>> npm install
```

### 3. Start the development server
```bash
>> npm start
```

Open `http://localhost:3000` in your browser.

## 📝 How it Works

- Parses your saved CSES HTML using the DOM API
- Extracts each section's task scores (`full`, `zero`, or `empty`)
- Stores counts in state (`solved`, `attempted`, `total`)
- Renders charts using `recharts`

## 📦 Built With

- React 19
- TailwindCSS
- Recharts
- DOMParser API