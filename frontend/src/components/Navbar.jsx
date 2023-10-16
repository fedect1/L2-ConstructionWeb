const Navbar = ({ isMenuVisible, toggleMenu }) => {
  return (
    <nav>
      <ul
        className={`primary-navigation ${
          isMenuVisible ? 'active' : ''
        } 'underline-indicators flex'`}
      >
        <button onClick={toggleMenu} className='btn-menu'>
          Close
        </button>
        <li>
          <a
            className='ff-sans-cond uppercase text-dark letter-spacing-2 fs-500'
            href='index.html'
          >
            Nosotros
          </a>
        </li>
        <li>
          <a
            className='ff-sans-cond uppercase text-dark letter-spacing-2 fs-500'
            href='services.html'
          >
            Servicios
          </a>
        </li>
        <li>
          <a
            className='ff-sans-cond uppercase text-dark letter-spacing-2 fs-500'
            href='works.html'
          >
            Obras
          </a>
        </li>
        <li>
          <a
            className='ff-sans-cond uppercase text-dark letter-spacing-2 fs-500'
            href='contact.html'
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
