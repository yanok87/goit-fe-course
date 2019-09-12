import React from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import design from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';
// import SearchForm from '../SearchForm/SearchForm';
// import Loader from '../Loader';
// import Modal from '../Modal/Modal';

const Gallery = ({ imagesArr, onClickBtn, openModal }) => {
  return (
    <>
      <ul className={design.gallery}>
        {imagesArr.map(
          ({
            webformatURL,
            largeImageURL,
            likes,
            views,
            comments,
            downloads,
          }) => (
            <PhotoCard
              key={shortid.generate()}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              likes={likes}
              views={views}
              comments={comments}
              downloads={downloads}
              openModal={openModal}
            />
          ),
        )}
      </ul>
      <button type="button" onClick={onClickBtn} className={design.button}>
        Load more
      </button>
    </>
  );
};

Gallery.propTypes = {
  imagesArr: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onClickBtn: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Gallery;

/*

<ul className={design.gallery}>
      {imagesArr.map(
        ({
          id,
          webformatURL,
          largeImageURL,
          likes,
          views,
          comments,
          downloads,
        }) => (
          <PhotoCard
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            likes={likes}
            views={views}
            comments={comments}
            downloads={downloads}
          />
        ),
      )}
    </ul>
*/
