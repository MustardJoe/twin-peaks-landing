import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerDiv}>
      Thanks for visiting, and please check out more of my projects on <a
        href="https://www.jonforney.com" target="_blank" rel="noopener noreferrer">
        https://www.jonforney.com
      </a>
    </div>
  );
};

export default Footer;
