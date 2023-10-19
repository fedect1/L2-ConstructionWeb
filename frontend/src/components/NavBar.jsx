import menuBurger from '../assets/icons/menu-burger.svg';

const Navbar = () => {
  return (
    <>
      <ul className='hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center'>
        <li>
          <a href='#'>Nosotros</a>
        </li>
        <li>
          <a href='#'>Servicios</a>
        </li>
        <li>
          <a href='#'>Trabajos</a>
        </li>
        <li>
          <a href='#'>Contacto</a>
        </li>
      </ul>
      <img
        className='w-10 h-4 cursor-pointer sm:hidden'
        src={menuBurger}
        alt='Menu'
      />
    </>
  );
};

export default Navbar;
