# 🛡️ ThreatLens \| Cyber Intelligence Dashboard

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)

------------------------------------------------------------------------

> 🚀 **ThreatLens** is a high-performance, real-time cyber intelligence
> dashboard built to visualize threats and monitor attack surfaces with
> modern frontend architecture.

------------------------------------------------------------------------

## 📸 Preview

> *(Add your dashboard screenshot here)*\
> `![Dashboard Screenshot](./assets/dashboard.png)`

------------------------------------------------------------------------

## 📖 Overview

ThreatLens is designed to simulate real-time cyber threat intelligence
feeds while maintaining exceptional UI performance.

It follows a **clean separation of concerns**: - 🧠 Stateful Components
(Containers) - 🎨 Stateless Components (UI)

This ensures smooth rendering even under continuous data updates.

------------------------------------------------------------------------

## ✨ Features

### 🔴 Live Threat Feed

Simulates WebSocket behavior by continuously injecting: - DDoS Attacks -
SQL Injection - XSS Threats

### 📊 Interactive Charts

-   Real-time severity tracking (High / Medium / Low)
-   Built using Chart.js

### ⚙️ OOJS Threat Engine

-   Custom `ThreatEngine.js`
-   Generates dynamic, realistic threat data

### 🎨 Scalable UI

-   Modular SCSS architecture
-   Dynamic styling based on threat severity

------------------------------------------------------------------------

## 💻 Tech Stack

  Category     Tech
  ------------ ---------------------------
  Core         React.js, HTML5
  JS           ES6+, OOJS
  Styling      Sass / SCSS
  Charts       Chart.js, react-chartjs-2
  Build Tool   Vite

------------------------------------------------------------------------

## 🏗️ Architecture Highlight

Instead of a real backend, ThreatLens uses:

👉 `ThreatEngine` (Mock Backend)

It mimics: - WebSocket streams - Server-Sent Events (SSE)

### 🔄 Flow:

1.  `ThreatEngine` generates data
2.  `ThreatContext` pulls data via `setInterval`
3.  UI updates in real-time

### 🔌 Production Upgrade Path:

Replace mock engine with: - Socket.io client - Kafka stream ingestion -
Node.js / Python backend

------------------------------------------------------------------------

## 🚀 Getting Started

### 1️⃣ Clone Repository

``` bash
git clone https://github.com/YourUsername/ThreatLens.git
cd ThreatLens
```

### 2️⃣ Install Dependencies

``` bash
npm install
```

### 3️⃣ Start Development Server

``` bash
npm run dev
```

### 4️⃣ Open in Browser

    http://localhost:5173

------------------------------------------------------------------------

## 📁 Project Structure (Suggested)

    src/
     ┣ components/
     ┣ context/
     ┣ engine/
     ┣ styles/
     ┣ App.jsx
     ┗ main.jsx

------------------------------------------------------------------------

## 🌟 Future Enhancements

-   🔐 Authentication system
-   🌍 Real threat API integration
-   📡 WebSocket backend
-   🧠 ML-based threat prediction
-   📊 Advanced analytics dashboard

------------------------------------------------------------------------

## 👨‍💻 Author

**Arnab Pachal**\
📞 Contact: 8327640898\
🔗 GitHub: https://github.com/Arnab-Pachal1234

------------------------------------------------------------------------

## ⭐ Support

If you like this project: - ⭐ Star the repo - 🍴 Fork it - 🚀
Contribute

------------------------------------------------------------------------

> ⚡ *Built with passion for cybersecurity & scalable frontend systems.*
