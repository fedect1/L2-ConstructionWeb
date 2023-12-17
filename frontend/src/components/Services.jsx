
import servicesImg from '../assets/images/services.png';
const Services = () => {
    return (
      <section className="h-[90vh]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Servicios de Construcción Completa</h2>
            <h3 className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">Métodos de Construcción: Hormigón Armado, Prefabricado, Contenedores, Estructuras Metálicas, Madera y Sistemas Modulares.</h3>
        </div>
        <div className="pb-5 flex flex-col mx-5">
                <div className='flex md:flex-row gap-6'>
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow md:basis-1/3">
                            <img class="rounded-t-lg" src={servicesImg} alt="" />
                        <div class="p-5">
                                <h3 class="mb-2 text-xl font-normal tracking-tight text-gray-700 text-center">Proyecto y Diseño Personalizado</h3> 
                        </div>
                    </div>
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow md:basis-1/3">
                            <img class="rounded-t-lg" src={servicesImg} alt="" />
                        <div class="p-5">
                                <h3 class="mb-2 text-xl font-normal tracking-tight text-gray-700 text-center">Materiales de Primera Calidad y Construcción Sostenible</h3> 
                        </div>
                    </div>
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow md:basis-1/3">
                            <img class="rounded-t-lg" src={servicesImg} alt="" />
                        <div class="p-5">
                                <h3 class="mb-2 text-xl font-normal tracking-tight text-gray-700 text-center">Ejecución y Control de Obra</h3> 
                        </div>
                    </div>
                </div>
        </div>
        <div className='mx-5 bg-Darkbg'>
            <h2 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl text-white">Áreas de Expertise</h2>
            <div className="my-4 mx-5 h-px bg-gray-300"></div>
            <div className='flex flex-col md:flex-row'>
                <h3 className="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-48">Terminaciones y Pintura</h3>
                <h3 className="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-48">Terminaciones y Pintura</h3>
            </div>

        </div>
      </section>
    )
  }
  
  export default Services
  