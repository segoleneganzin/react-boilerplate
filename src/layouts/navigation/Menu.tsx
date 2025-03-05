import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Cta from '../../components/Cta';
import { homeSections } from '../../utils/sections';

const Menu = () => {
  const checkBurger = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleResponsiveMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  useEffect(() => {
    if (!hamburgerOpen && checkBurger.current) {
      checkBurger.current.checked = false;
    }
  }, [hamburgerOpen]);

  return (
    <>
      <nav className={hamburgerOpen ? 'menu--responsive' : 'menu'}>
        <ul className='menu__list' role='menu'>
          {homeSections.map((section) => (
            <li key={section.id} className='menu__item' role='menuitem'>
              <a
                href={`#${section.id}`}
                rel='ugc'
                className='menu__item-link bold'
                onClick={hamburgerOpen ? toggleResponsiveMenu : undefined}
              >
                {section.title}
              </a>
            </li>
          ))}
          <Cta
            handleClick={() => navigate('/')}
            classname='btn hero__cta'
            content='Call to action'
          />
        </ul>
      </nav>
      <label
        className='menu__burger'
        htmlFor='burger'
        aria-label='Ouvrir le menu'
      >
        <input
          ref={checkBurger}
          type='checkbox'
          id='burger'
          onClick={toggleResponsiveMenu}
          aria-haspopup='true'
          aria-controls='toggleNavbar'
          aria-expanded={hamburgerOpen}
          aria-label='Ouverture du menu'
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </>
  );
};

export default Menu;
