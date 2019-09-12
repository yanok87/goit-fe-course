import React from 'react';
import design from './Loader.module.css';

const Loader = () => {
  return (
    <div className={design.parent}>
      <div className={design.lds_roller}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
