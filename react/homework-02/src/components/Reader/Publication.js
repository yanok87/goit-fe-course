import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';

const Publication = ({ item }) => {
  return (
    <article className={styles.publication}>
      <h2 className={styles.publication_h2}>{item.title}</h2>
      <p className={styles.publication_p}>{item.text}</p>
    </article>
  );
};

Publication.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
