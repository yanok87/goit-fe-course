import React from 'react';
import styles from './Pricing.module.css';

const PricingItem = ({ label, icon, capacity, price, description }) => {
  let color;
  if (label === 'Bronze') {
    color = '#DE7B4A';
  } else if (label === 'Silver') {
    color = '#C0C0C0';
  } else if (label === 'Gold') {
    color = '#DDA431';
  }
  return (
    <div className={styles.item}>
      <img className={styles.image} src={icon}></img>
      <h2 className={styles.label} style={{ color }}>
        {label}
      </h2>
      <p className={styles.capacity}>{capacity}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}/MO</p>
      <button className={styles.button} style={{ backgroundColor: color }}>
        Get Started
      </button>
    </div>
  );
};

export default PricingItem;
