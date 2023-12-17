import imageHeroDesktop from '../assets/images/hero-foto-desktop.png';
import imageHeroMobile from '../assets/images/hero-foto-mobile.jpg';
const NewHero = () => {
  return (
    <section className='w-full overflow-hidden text-center flex flex-row h-[90vh] mt-[10vh] pb-5'>
      <div className='basis-1/2 mx-5 my-3 flex flex-col justify-center items-center'>
        <div className=''>
          <h1 className='text-xs font-bold sm:text-2xl tracking-wide uppercase'>
          Servicios de Construcción y Diseño de Calidad en Funes
          </h1>
        </div>
        <div className='mt-5'>
          <p className='text-base mb-10 sm:text-base '>
          En L2, cada proyecto es un compromiso con la calidad y la precisión. Nos especializamos en llevar diseños a la realidad, enfocándonos en una ejecución y dirección meticulosa. Nuestro enfoque está en superar las expectativas con solidez, responsabilidad y una gestión eficiente. Su visión, guiada por nuestra experiencia, se convierte en estructuras duraderas y funcionales
          </p>
          <button type="button" className="hidden md:inline-block text-GrayCustom bg-SoftOrange hover:bg-WhatsappGreen focus:ring-4 focus:outline-none focus:ring-WhatsappHover font-medium rounded-lg text-lg py-3 px-5 text-center shadow-xl">Contacto</button>
        </div>
      </div>
      <div className='basis-1/2 mx-5 my-3'>
        <img 
            src={imageHeroMobile} 
            alt="Hero Mobile" 
            className="md:hidden w-full h-full object-cover brightness-50 rounded-md"
          />

          <img 
            src={imageHeroMobile} 
            alt="Hero Desktop" 
            className="hidden md:block w-full h-full object-cover brightness-50 rounded-xl"
          />
      </div>
      {/* <div className='z-30 relative'>
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
    </div> */}
    </section>
  )
}

export default NewHero
