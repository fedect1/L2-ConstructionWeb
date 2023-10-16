import heroImg from '../assets/images/hero.jpg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <h1 className='ff-sans-cond uppercase text-white letter-spacing-2 fs-700'>
          Nosotros
        </h1>
        <p className='ff-sans-cond uppercase text-white letter-spacing-2 fs-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem.
        </p>
        <img src={heroImg} alt='hero' className='hero-img' />
      </div>
    </div>
  );
};

export default Hero;
