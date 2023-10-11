const Navbar = (navId) => {
  return (
    <nav>
      <ul id={navId} className='primary-navigation underline-indicators flex'>
        <li>
          <a
            className='ff-sans-cond uppercase text-dark letter-spacing-2'
            href='index.html'
          >
            Nosotros
          </a>
        </li>
        <li>
          <a
            className='ff-sans-cond uppercase text-dark letter-spacing-2'
            href='services.html'
          >
            Servicios
          </a>
        </li>
        <li>
          <a
            className='ff-sans-cond uppercase text-dark letter-spacing-2'
            href='works.html'
          >
            Obras
          </a>
        </li>
        <li>
          <a
            className='ff-sans-cond uppercase text-dark letter-spacing-2'
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
