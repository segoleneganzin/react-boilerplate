import { useNavigate } from 'react-router-dom';
import Cta from '../components/Cta';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <main className='landing'>
      <div className='landing__content'>
        <h1>Nom du site</h1>
        <Cta
          handleClick={() => navigate('/')}
          classname='btn landing__cta'
          content='CTA'
        />
      </div>
    </main>
  );
};

export default Landing;
