import logo from '../assets/images/logo.png';
import Navbar from './NavBar';

const Header = () => {
  return (
    <header className=' flex place-content-between items-center mb-8 mt-10'>
      <img src={logo} alt='logo' className='w-24 h-12' />
      <Navbar />
    </header>
  );
};

export default Header;
