import React from 'react';
import styles from './Preloader.module.css'; // Create a CSS module for styling

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      {/* Add your preloader animation or content here */}
      <div className={styles.loader}></div>
    </div>
  );
};

export default Preloader;