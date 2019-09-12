import React from 'react';
import PropTypes from 'prop-types';
import styles from '../TransactionHistory/Transactions.module.css';

const Controls = ({
  input,
  onHandleChangeInput,
  onHandleDepositSubmit,
  onHandleWithdrawSubmit,
}) => {
  return (
    <section className={styles.controls}>
      <input
        type="number"
        value={input}
        name="inputValue"
        onChange={onHandleChangeInput}
        className={styles.controls_input}
      />
      <button
        className={styles.controls_buttonDeposit}
        type="button"
        onClick={onHandleDepositSubmit}
      >
        Deposit
      </button>
      <button
        className={styles.controls_button}
        type="button"
        onClick={onHandleWithdrawSubmit}
      >
        Withdraw
      </button>
    </section>
  );
};

Controls.propTypes = {
  input: PropTypes.string.isRequired,
  onHandleChangeInput: PropTypes.func.isRequired,
  onHandleDepositSubmit: PropTypes.func.isRequired,
  onHandleWithdrawSubmit: PropTypes.func.isRequired,
};

export default Controls;
