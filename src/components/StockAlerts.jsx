import React from 'react';
import { useAuth } from '../context/AuthContext';
import './StockAlerts.css';

const StockAlerts = () => {
  const { getStockAlerts } = useAuth();
  const alerts = getStockAlerts();

  if (alerts.length === 0) {
    return null;
  }

  return (
    <div className="stock-alerts-container">
      <div className="alert alert-warning">
        <div className="alert-icon">⚠️</div>
        <div className="alert-content">
          <strong>Stock Alert!</strong>
          <p>
            {alerts.length} medicine{alerts.length > 1 ? 's' : ''} {alerts.length > 1 ? 'have' : 'has'} low stock:
          </p>
          <ul className="alert-list">
            {alerts.map(medicine => (
              <li key={medicine.id}>
                <strong>{medicine.name}</strong> - Only {medicine.stock} units remaining
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StockAlerts;

