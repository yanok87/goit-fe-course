import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Movies/Movies.module.css';

const MovieCard = ({ items }) => {
  return (
    <>
      {items.map(item => (
        <li className={styles.movie_card} key={item.id}>
          <img
            src={item.posterUrl}
            alt="poster"
            className={styles.movie_card_img}
          />
          <div className={styles.content}>
            <h2 className={styles.movie_card_title}>{item.title}</h2>
            <p className={styles.movie_card_descr}>{item.overview}</p>
          </div>
        </li>
      ))}
    </>
  );
};

MovieCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      posterUrl: PropTypes.string,
      title: PropTypes.string,
      overview: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default MovieCard;
