import { useNavigate } from 'react-router-dom';
import Cta from '../components/Cta';
import HeroImage from '../assets/images/hero.jpg';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className='hero'>
      <div className='hero__text'>
        <h2 className='hero__title bold'>Hero Title</h2>
        <p className='hero__description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
          Donec ut dui sed ex dapibus porta.
        </p>
        <Cta
          handleClick={() => navigate('/')}
          classname='hero__cta'
          content='Call to action'
        />
      </div>
      <div className='hero__img-container'>
        <img src={HeroImage} alt='' className='hero__img' />
      </div>
    </section>
  );
};

export default Hero;
