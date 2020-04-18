import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerDiv}>
      Thanks for visiting, and please check out more of my projects on <a
        href="https://www.jonforney.com" target="_blank" rel="noopener noreferrer">
        https://www.jonforney.com
      </a>
      <p className={styles.footerP}>
        You can also find me at my <a
          href="https://github.com/MustardJoe"
          target="_blank" rel="noopener noreferrer">Github</a> or
        <a href="https://www.linkedin.com/in/jon-forney/"
          target="_blank" rel="noopener noreferrer"> LinkedIn</a> pages.
      </p>
    </div>
  );
};

export default Footer;
