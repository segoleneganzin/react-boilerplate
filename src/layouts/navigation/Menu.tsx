import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { useState } from 'react';
import MenuIcon from '../../components/icons/MenuIcon';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Button
        handleClick={toggleMenu}
        classname='app-navigation__btn'
        content={<MenuIcon />}
        ariaLabel='Ouvrir le menu'
      />
      {isMenuOpen && (
        <div className='menu'>
          <Link to={'/'} className='menu__link'>
            Accueil
          </Link>
        </div>
      )}
    </>
  );
};

export default Menu;
