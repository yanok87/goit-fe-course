import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';

const Counter = ({ currentArticle, articleQuantity }) => {
  return (
    <div className={styles.counter}>
      <p>
        {currentArticle}/{articleQuantity}
      </p>
    </div>
  );
};

export default Counter;

Counter.propTypes = {
  currentArticle: PropTypes.number.isRequired,
  articleQuantity: PropTypes.number.isRequired,
};
