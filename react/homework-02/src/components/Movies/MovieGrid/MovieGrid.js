import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import styles from '../Movies/Movies.module.css';

const MovieGrid = ({ items }) => {
  return items.length === 0 ? (
    <p>None!!!</p>
  ) : (
    <ul className={styles.movie_grid}>
      <MovieCard items={items} />
    </ul>
  );
};

MovieGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default MovieGrid;
