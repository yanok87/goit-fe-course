import React from 'react';
import PropTypes from 'prop-types';
import design from './PhotoCard.module.css';

const PhotoCard = ({
  webformatURL,
  largeImageURL,
  openModal,
  likes,
  views,
  downloads,
  comments,
}) => {
  return (
    <li className={design.gallery_item}>
      <div className={design.photo_card}>
        <img src={webformatURL} alt="imghere" />
        <div className={design.stats}>
          <p className={design.stats_item}>
            <i className="material-icons">thumb_up</i>
            {likes}
          </p>
          <p className={design.stats_item}>
            <i className="material-icons">visibility</i>
            {views}
          </p>
          <p className={design.stats_item}>
            <i className="material-icons">comment</i>
            {comments}
          </p>
          <p className={design.stats_item}>
            <i className="material-icons">cloud_download</i>
            {downloads}
          </p>
        </div>
        <button
          onClick={() => openModal(largeImageURL)}
          type="button"
          className={design.fullscreen_button}
        >
          <i className="material-icons" style={{ pointerEvents: 'none' }}>
            zoom_out_map
          </i>
        </button>
      </div>
    </li>
  );
};

PhotoCard.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default PhotoCard;
