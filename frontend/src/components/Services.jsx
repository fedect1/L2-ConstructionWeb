
import servicesImg from '../assets/images/services.png';
const Services = () => {
    return (
      <section className="h-[90vh]">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h2 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Servicios de Construcción Completa</h2>
            <h3 class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Explorando Métodos de Construcción: Hormigón Armado, Prefabricado, Contenedores, Estructuras Metálicas, Madera y Sistemas Modulares.</h3>
        </div>
        <div className="pb-5 flex flex-col mx-5">
                <div className='flex md:flex-row gap-6'>
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow md:basis-1/3">
                            <img class="rounded-t-lg" src={servicesImg} alt="" />
                        <div class="p-5">
                                <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Proyecto y Diseño Personalizado</h3> 
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </div>
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow md:basis-1/3">
                            <img class="rounded-t-lg" src={servicesImg} alt="" />
                        <div class="p-5">
                                <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Materiales de Primera Calidad y Construcción Sostenible</h3> 
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </div>
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow md:basis-1/3">
                            <img class="rounded-t-lg" src={servicesImg} alt="" />
                        <div class="p-5">
                                <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ejecución y Control de Obra</h3> 
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </div>
                </div>
        </div>
        
      </section>
    )
  }
  
  export default Services
  