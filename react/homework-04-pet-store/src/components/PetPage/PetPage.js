/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import pets from '../../pets.json';
import styles from './PetPage.module.css';

const PetPage = props => {
  const pet = pets.find(el => el.id === props.match.params.id);
  return (
    <div>
      <Link className={styles.button} to="/pets">
        Back
      </Link>
      <section className={styles.pet_container}>
        <h2>About {pet.name}</h2>
        <div className={styles.description}>
          <img src={pet.image} alt="pet" className={styles.pet_image} />
          <div className={styles.pet_info}>
            <p>Age: {pet.age}</p>
            <p>Color: {pet.color} </p>
            <p>Breed: {pet.breed} </p>
            <p>Gender: {pet.gender}</p>
          </div>
        </div>
        <p className="about">{pet.description}</p>
      </section>
    </div>
  );
};

// PetPage.propTypes = {
//   pet: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     age: PropTypes.number.isRequired,
//     color: PropTypes.string.isRequired,
//     breed: PropTypes.string.isRequired,
//     gender: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default PetPage;
