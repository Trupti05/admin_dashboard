# Admin Dashboard

A full-stack admin dashboard application designed to manage products, orders, payments, and users. This project features a React-based frontend and a Node.js/Express/MongoDB backend. It supports user registration, authentication, product management, order tracking, payment processing, and settings management.

---

## Features

- **User Registration & Authentication**:  
  Multi-step user registration with profile image upload, store details, and payment info. JWT-based login and authentication.
- **Product Management**:  
  Add, edit, and view products with support for multiple images, descriptions, pricing, discounts, and scheduling.
- **Order Management**:  
  Track orders with customer details, status, payment, and amount spent.
- **Payment Tracking**:  
  Record and view payments, including transaction details, customer and product info, and payment status.
- **Dashboard & Sidebar Navigation**:  
  Responsive sidebar for quick navigation between dashboard, products, orders, payments, settings, and logout.
- **Settings Page**:  
  Update account, store, and payment information.
- **Protected Routes**:  
  Authentication middleware ensures only authorized access to backend APIs.
- **Persistent Auth State**:  
  User tokens are stored in local storage for session persistence.

---

## Tech Stack

- **Frontend**:  
  React, React Context API, React Router, Axios, Lucide UI icons, Tailwind CSS (assumed by class names), Vite

- **Backend**:  
  Node.js, Express, MongoDB (Mongoose), Multer (for file uploads), Joi (validation), JWT, Bcrypt

---

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB instance

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/Trupti05/admin_dashboard.git
cd admin_dashboard
```

#### 2. Install backend dependencies

```bash
cd backend
npm install
```

#### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

#### 4. Start MongoDB

Make sure your MongoDB server is running locally on port `27017`.

#### 5. Run the backend server

```bash
cd ../backend
node index.js
```

The backend will be running at [http://localhost:8000](http://localhost:8000).

#### 6. Run the frontend app

```bash
cd ../frontend
npm run dev
```

The frontend will be running at [http://localhost:5173](http://localhost:5173) (default Vite port).

---

## Project Structure

```
admin_dashboard/
├── backend/
│   ├── App/
│   │   ├── controller/        # Route controllers (user, product, order, payment)
│   │   ├── middleware/        # Multer upload, authentication, validation
│   │   ├── model/             # Mongoose models (User, Product, Order, Payment)
│   │   ├── route/             # Route definitions
│   │   └── mainRoute.js       # Main route aggregator
│   └── index.js               # Express server entrypoint
├── frontend/
│   ├── src/
│   │   ├── Components/        # Sidebar, UserRegistration, etc.
│   │   ├── Context/           # MainContext for global state (auth, count)
│   │   ├── Pages/             # Settings, dashboard, etc.
│   │   └── main.jsx           # React app entry point
│   └── index.html
└── README.md
```

---

## Environment Variables

- The backend currently uses hardcoded values for JWT secrets and MongoDB URI. For production, store these in a `.env` file and update the code to read from environment variables.

---

## API Endpoints

### Users

- `POST /user/register` — Register a new user
- `POST /user/login` — Login with email and password
- `GET /user/details` — Get current user details *(requires token)*

### Products

- `POST /product/new` — Add a product (with image upload)
- `GET /product` — List all products

### Orders

- `POST /order/new` — Create a new order
- `GET /order` — List all orders

### Payments

- `POST /payment/new` — Record a payment
- `GET /payment` — List all payments

---

## Contributor
Trupti Chandwani
(https://github.com/Trupti05)
