import imageHeroDesktop from '../assets/images/hero-foto-desktop.png';
import imageHeroMobile from '../assets/images/hero-foto-mobile.jpg';
const Hero = () => {
  return (
    <section className='mt-11 h-[95vh]'>
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
          Excelencia en Dirección y Ejecución de Proyectos
          </h1>
        </div>
        <div className='flex-1 pt-9'>
          <p className='text-[13px] mb-10 sm:text-[15px]'>
          En L2, cada proyecto es un compromiso con la calidad y la precisión. Nos especializamos en llevar diseños a la realidad, enfocándonos en una ejecución y dirección meticulosa. Nuestro enfoque está en superar las expectativas con solidez, responsabilidad y una gestión eficiente. Su visión, guiada por nuestra experiencia, se convierte en estructuras duraderas y funcionales
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
