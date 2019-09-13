import React from 'react';
import { Link } from 'react-router-dom';
import pets from '../../pets.json';
import styles from './PetsPage.module.css';

const PetsPage = () => {
  return (
    <ul className={styles.pets_list}>
      {pets.map(pet => (
        <Link className={styles.link} key={pet.id} to={`/pets/${pet.id}`}>
          <li className={styles.pet_card}>
            <img src={pet.image} alt="pet" />
            <p>{pet.name}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default PetsPage;
