const ServicesSection = () => {
  return (
    <section>
        <h2 className="text-xs text-center font-bold sm:text-2xl uppercase">Servicios</h2>
        <div className="h-[90vh] pb-5 flex flex-col md:flex-row gap-6 mx-5">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow md:basis-1/3 h-48"></div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow md:basis-1/3 h-48"></div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow md:basis-1/3 h-48"></div>
        </div>
    </section>
  )
}

export default ServicesSection
