import logo from '../assets/images/logo.jpg';
import Navbar from './Navbar';

const Header = () => {
  const navId = 'primary-navigation';
  return (
    <header className='container primary-header flex'>
      <img src={logo} alt='logo' className='logo' />
      <button aria-controls={navId}>
        <span className='sr-only'>Menu</span>
      </button>
      <Navbar navId={navId} />
    </header>
  );
};

export default Header;
