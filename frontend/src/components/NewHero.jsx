import imageHeroDesktop from '../assets/images/hero-foto-desktop.png';
import imageHeroMobile from '../assets/images/hero-foto-mobile.jpg';
const NewHero = () => {
  return (
    <section className='relative h-screen w-full overflow-hidden text-center'>
      <div className='z-30 relative'>
        <h1 className='text-white pt-40 text-5xl font-medium'>Bienvenido a L2 - Maestros en la Dirección y Ejecución de Proyecto</h1>
        <p className='text-white text-base'>En L2, transformamos visiones en estructuras impresionantes. Nuestra experiencia abarca desde el diseño innovador hasta la ejecución meticulosa, asegurando que cada proyecto se realice con precisión y excelencia. Con un enfoque en la dirección y ejecución de obras, estamos comprometidos a llevar tus ideas a la realidad, garantizando resultados que no solo cumplen, sino que superan tus expectativas</p>
      </div>
      <div className='absolute top-0 left-0 w-full h-[90vh]'>
        <img 
          src={imageHeroMobile} 
          alt="Hero Mobile" 
          className="md:hidden w-full h-full object-cover brightness-50 rounded-md"
        />

        <img 
          src={imageHeroDesktop} 
          alt="Hero Desktop" 
          className="hidden md:block w-full h-full object-cover brightness-50 rounded-md"
        />
    </div>
    </section>
  )
}

export default NewHero
