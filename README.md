<<<<<<< HEAD
# Pharmacy Inventory Management System

A modern, full-featured pharmacy inventory management system built with React.js. This application provides a comprehensive solution for managing medicines, pharmacists, and customer orders.

## Features

### 🏠 Home Page
- Display all available medicines in an attractive card layout
- Information about the pharmacy
- Purchase functionality for customers
- Stock status indicators

### 👤 Authentication
- Role-based login system (Admin & Pharmacist)
- Secure authentication with protected routes

### 👨‍💼 Admin Dashboard
- **Pharmacist Management**: Full CRUD operations
  - Create new pharmacists
  - View all pharmacists
  - Edit pharmacist details
  - Delete pharmacists
- Stock alerts for low inventory medicines

### 💊 Pharmacist Dashboard
- **Medicine Management**: Full CRUD operations
  - Add new medicines
  - View all medicines with details
  - Edit medicine information
  - Delete medicines
  - Update stock levels
- View recent customer orders
- Stock alerts for low inventory

### 🛒 Purchase System
- Customers can purchase medicines directly from the home page
- Collects customer information for delivery:
  - Full name
  - Email address
  - Phone number
  - Delivery address
  - Quantity selection
- Automatic stock deduction upon purchase
- Order confirmation

### ⚠️ Stock Alerts
- Real-time alerts for medicines with low stock (< 20 units)
- Visible to both Admin and Pharmacist
- Prominent display in navigation bar and dashboards

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Demo Credentials

### Admin Login
- **Email**: `admin@pharmacy.com`
- **Password**: `admin123`
- **Access**: Admin Dashboard (Pharmacist CRUD)

### Pharmacist Login
- **Email**: Use any pharmacist email from the list (e.g., `sarah@pharmacy.com`, `michael@pharmacy.com`)
- **Password**: `pharmacist123`
- **Access**: Pharmacist Dashboard (Medicine CRUD)

## Project Structure

```
pharmacy-inventory/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MedicineCard.js
│   │   ├── Navbar.js
│   │   ├── PurchaseModal.js
│   │   └── StockAlerts.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── AdminDashboard.js
│   │   └── PharmacistDashboard.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Technologies Used

- **React 18** - UI library
- **React Router DOM** - Routing and navigation
- **Context API** - State management
- **LocalStorage** - Data persistence
- **CSS3** - Modern styling with gradients and animations

## Key Features

- ✅ Responsive design for all screen sizes
- ✅ Modern UI with smooth animations
- ✅ Real-time stock management
- ✅ Order tracking system
- ✅ Role-based access control
- ✅ Data persistence with localStorage
- ✅ Intuitive user interface

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner

## Notes

- All data is stored in browser localStorage
- Stock alerts trigger when medicine stock is below 20 units
- The system automatically updates stock when orders are placed
- Admin can manage pharmacists, Pharmacists can manage medicines

## Future Enhancements

- Backend API integration
- Database storage
- User authentication with JWT tokens
- Email notifications
- Advanced reporting and analytics
- Inventory forecasting
- Multi-pharmacy support

---

Built with ❤️ using React.js

=======
# Pharmacy Inventory Management System

A modern, full-featured pharmacy inventory management system built with React.js. This application provides a comprehensive solution for managing medicines, pharmacists, and customer orders.

## Features

### 🏠 Home Page
- Display all available medicines in an attractive card layout
- Information about the pharmacy
- Purchase functionality for customers
- Stock status indicators

### 👤 Authentication
- Role-based login system (Admin & Pharmacist)
- Secure authentication with protected routes

### 👨‍💼 Admin Dashboard
- **Pharmacist Management**: Full CRUD operations
  - Create new pharmacists
  - View all pharmacists
  - Edit pharmacist details
  - Delete pharmacists
- Stock alerts for low inventory medicines

### 💊 Pharmacist Dashboard
- **Medicine Management**: Full CRUD operations
  - Add new medicines
  - View all medicines with details
  - Edit medicine information
  - Delete medicines
  - Update stock levels
- View recent customer orders
- Stock alerts for low inventory

### 🛒 Purchase System
- Customers can purchase medicines directly from the home page
- Collects customer information for delivery:
  - Full name
  - Email address
  - Phone number
  - Delivery address
  - Quantity selection
- Automatic stock deduction upon purchase
- Order confirmation

### ⚠️ Stock Alerts
- Real-time alerts for medicines with low stock (< 20 units)
- Visible to both Admin and Pharmacist
- Prominent display in navigation bar and dashboards

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Demo Credentials

### Admin Login
- **Email**: `admin@pharmacy.com`
- **Password**: `admin123`
- **Access**: Admin Dashboard (Pharmacist CRUD)

### Pharmacist Login
- **Email**: Use any pharmacist email from the list (e.g., `sarah@pharmacy.com`, `michael@pharmacy.com`)
- **Password**: `pharmacist123`
- **Access**: Pharmacist Dashboard (Medicine CRUD)

## Project Structure

```
pharmacy-inventory/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MedicineCard.js
│   │   ├── Navbar.js
│   │   ├── PurchaseModal.js
│   │   └── StockAlerts.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── AdminDashboard.js
│   │   └── PharmacistDashboard.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Technologies Used

- **React 18** - UI library
- **React Router DOM** - Routing and navigation
- **Context API** - State management
- **LocalStorage** - Data persistence
- **CSS3** - Modern styling with gradients and animations

## Key Features

- ✅ Responsive design for all screen sizes
- ✅ Modern UI with smooth animations
- ✅ Real-time stock management
- ✅ Order tracking system
- ✅ Role-based access control
- ✅ Data persistence with localStorage
- ✅ Intuitive user interface

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner

## Notes

- All data is stored in browser localStorage
- Stock alerts trigger when medicine stock is below 20 units
- The system automatically updates stock when orders are placed
- Admin can manage pharmacists, Pharmacists can manage medicines

## Future Enhancements

- Backend API integration
- Database storage
- User authentication with JWT tokens
- Email notifications
- Advanced reporting and analytics
- Inventory forecasting
- Multi-pharmacy support

---

Built with ❤️ using React.js

>>>>>>> 71aeeb478a02218b5b79633cbbc0cc1abdb6f29a
