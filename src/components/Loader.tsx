import ReactLoading from 'react-loading';

const Loader = () => {
  return (
    <div
      aria-label='Orange and tan hamster running in a metal wheel'
      role='img'
      className='loader'
    >
      <ReactLoading type='bubbles' color='#519E46' />
    </div>
  );
};

export default Loader;
