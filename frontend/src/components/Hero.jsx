import imageHeroDesktop from '../assets/images/hero-foto-desktop.jpg';
import imageHeroMobile from '../assets/images/hero-foto-mobile.jpg';
const Hero = () => {
  return (
    <section>
      <picture>
        <source media='(min-width: 641px)' srcSet={imageHeroDesktop} />
        <source media='(max-width: 640px)' srcSet={imageHeroMobile} />
        <img
          className=''
          src={imageHeroMobile}
          alt='Foto de portada de la empresa'
        />
      </picture>
      <div>
        <div className='sm:flex'>
          <h1 className='text-4xl font-bold text-center mt-4'>
            Somos una empresa de servicios de Construccion
          </h1>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi sed
            rem corporis recusandae voluptate laborum ipsum excepturi
            consectetur, fuga facere nisi quo, mollitia voluptatum qui
            cupiditate. Ullam minima ad aperiam!
          </p>
          <button>Contacto</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
