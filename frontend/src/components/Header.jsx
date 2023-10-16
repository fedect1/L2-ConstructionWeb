import { useState } from 'react';
import logo from '../assets/images/logo.jpg';
import Navbar from './Navbar';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <header className='container primary-header flex'>
      <img src={logo} alt='logo' className='logo' />
      <button onClick={toggleMenu} className='btn-menu'>
        <span>Menu</span>
      </button>
      <Navbar isMenuVisible={menuVisible} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
