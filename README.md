# 🧮 Inventory Management System (FIFO) – Real-Time Ingestion & Live Dashboard

A **full-stack Inventory Management System** that simulates real-time purchase and sales events using **Kafka**, processes them via a **Node.js (Express)** backend with **FIFO costing logic**, and displays live inventory insights on a **React-based dashboard**.  

Deployed end-to-end with working public URLs for both backend and frontend.
## 🚀 Live Links

| Service | URL |
|----------|-----|
| **Frontend (React Dashboard)** | [🔗 Click Here](https://your-frontend-link.vercel.app) |
| **Backend (Express API)** | [🔗 Click Here](https://your-backend-link.onrender.com) |
| **GitHub Repository** | [🔗 Click Here](https://github.com/your-username/inventory-fifo) |
**Login Credentials:**
Username: admin
Password: admin123

## 🧠 Project Overview

This system manages real-time inventory and sales using the **FIFO (First-In, First-Out)** costing method.
- Inventory events (purchases/sales) are streamed in via **Kafka**.
- The **backend** applies FIFO logic to maintain stock levels and calculate accurate sale costs.
- The **frontend dashboard** visualizes stock levels, costs, and transaction ledger in real time.

## ⚙️ Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React.js, Axios, Chart.js, Bootstrap | Tailwind CSS
| **Backend** | Node.js, Express.js |
| **Database** | PostgreSQL |
| **Messaging** | Apache Kafka (Redpanda / Confluent Cloud) |
| **Deployment** | Render (Backend), Vercel (Frontend) |
| **Authentication** | Basic Auth (username/password) |

## 🔄 Kafka Integration

### Kafka Topic: `inventory-events`

Each message follows this JSON format:
```json
{
  "product_id": "PRD001",
  "event_type": "purchase", // or "sale"
  "quantity": 50,
  "unit_price": 100.0,      // only for purchase
  "timestamp": "2025-07-12T10:00:00Z"
}
Purchase events create new inventory batches.

Sale events consume from the oldest batches first (FIFO).

Kafka consumer service updates PostgreSQL in real-time.
