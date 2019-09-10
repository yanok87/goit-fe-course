import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';

const Controls = ({
  onHandleIncrement,
  onHandleDecrement,
  disablePrev,
  disableNext,
}) => {
  return (
    <div className={styles.controls}>
      <button
        onClick={disablePrev === 'true' ? null : onHandleDecrement}
        className={disablePrev === 'true' ? styles.disable : styles.button}
        type="button"
      >
        Назад
      </button>
      <button
        onClick={disableNext === 'true' ? null : onHandleIncrement}
        className={disableNext === 'true' ? styles.disable : styles.button}
        type="button"
      >
        Вперед
      </button>
    </div>
  );
};

Controls.propTypes = {
  onHandleIncrement: PropTypes.func.isRequired,
  onHandleDecrement: PropTypes.func.isRequired,
  disablePrev: PropTypes.string.isRequired,
  disableNext: PropTypes.string.isRequired,
};

export default Controls;
