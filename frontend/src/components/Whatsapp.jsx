const Whatsapp = () => {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const message = encodeURIComponent(
    'Hello, I am interested in your product. Please provide more details.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  return (
    <a>
      <a
        href={whatsappUrl}
        className='whatsapp-button'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='ff-sans-cond uppercase text-dark letter-spacing-2 fs-500'>
          Contacto
        </i>
      </a>
    </a>
  );
};

export default Whatsapp;
