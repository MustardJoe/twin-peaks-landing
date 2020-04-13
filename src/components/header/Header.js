import React from 'react';
import headerImg from '../../assets/twinpeaksheader.png';

const Header = () => {
  return (
    <div>
      <img src={headerImg} alt="Welcome to Twin Peaks, the REST API"></img>
    </div>
  );
};

export default Header;
