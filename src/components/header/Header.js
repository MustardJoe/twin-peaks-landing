import React from 'react';
import headerImg from '../../assets/twinpeaksheader.png';
import styles from './header.module.css';

const Header = () => {
  return (
    <div>
      <img className={styles.img}
        src={headerImg} alt="Welcome to Twin Peaks, the REST API"></img>
    </div>
  );
};

export default Header;
