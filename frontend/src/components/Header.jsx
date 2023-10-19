import logo from '../assets/images/logo.jpg';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className=' flex place-content-between items-center mb-8'>
      <img src={logo} alt='logo' className='w-24 h-12' />
      <Navbar />
    </header>
  );
};

export default Header;
