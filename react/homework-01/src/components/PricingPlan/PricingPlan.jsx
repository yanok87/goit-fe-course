import React from 'react';
import PropTypes from 'prop-types';
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
      />
    ))}
  </ul>
);

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      capacity: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PricingPlan;
