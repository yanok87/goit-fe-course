import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transactions.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.table}>
    <thead>
      <tr className={styles.heading}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id} className={styles.row}>
          <td className={styles.type}>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      amount: PropTypes.string,
      type: PropTypes.string,
      currency: PropTypes.string,
    }),
  ).isRequired,
};

export default TransactionHistory;
