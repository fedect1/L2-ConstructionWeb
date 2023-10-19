import imageHeroDesktop from '../assets/images/hero-foto-desktop.png';
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
      <div className='sm:flex'>
        <div className='flex-1 py-6'>
          <h1 className='text-[40px] font-bold sm:text-[58px] leading-none'>
            Somos una empresa de servicios de Construccion
          </h1>
        </div>
        <div className='flex-1 pt-9'>
          <p className='text-[13px] mb-10 sm:text-[15px]'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi sed
            rem corporis recusandae voluptate laborum ipsum excepturi
            consectetur, fuga facere nisi quo, mollitia voluptatum qui
            cupiditate. Ullam minima ad aperiam!
          </p>
          <button className='bg-SoftOrange w-[185px] h-[48px] hover:bg-VeryDarkBlue'>
            Contacto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
