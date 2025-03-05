import Menu from './navigation/Menu';
import { variables } from '../utils/variables';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>{variables.siteName}</h1>
      <Menu />
    </header>
  );
};

export default Header;
