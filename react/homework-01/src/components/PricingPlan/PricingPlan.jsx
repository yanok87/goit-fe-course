import React from 'react';
import PricingItem from './PricingItem';
import styles from './Pricing.module.css';

const PricingPlan = ({ items }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <PricingItem
        key={item.label}
        capacity={item.capacity}
        price={item.price}
        description={item.description}
        icon={item.icon}
        label={item.label}
      ></PricingItem>
    ))}
  </ul>
);

export default PricingPlan;
