import React from 'react';
import { useAuth } from '../context/AuthContext';
import MedicineCard from '../components/MedicineCard';
import StockAlerts from '../components/StockAlerts';
import './Medicines.css';

const Medicines = () => {
  const { medicines, getStockAlerts } = useAuth();
  const alerts = getStockAlerts();

  return (
    <div className="medicines-page">
      <div className="container">
        <div className="page-header">
          <h1>Our Medicines</h1>
          <p>Browse our complete selection of quality medications</p>
        </div>

        {alerts.length > 0 && <StockAlerts />}

        <div className="medicines-grid">
          {medicines.map(medicine => (
            <MedicineCard key={medicine.id} medicine={medicine} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Medicines;

