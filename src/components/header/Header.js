import React from 'react';
import headerImg from '../../assets/twinpeaksheader.png';
import styles from './header.module.css';

const Header = () => {
  return (
    <div>
      <a href="./">
        <img className={styles.img}
          src={headerImg} alt="Welcome to Twin Peaks, the REST API"></img>
      </a>
    </div>
  );
};

export default Header;
