import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Cta from '../../components/Cta';
import { homeSections } from '../../utils/sections';

const Menu = () => {
  const navigate = useNavigate();

  // Ref to the menu and the hamburger icon to detect clicks outside of them
  const checkBurger = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLLabelElement>(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [menuClassName, setMenuClassName] = useState('');

  // Determine if the screen is considered responsive or not
  const responsive = windowWidth < 1440;

  // Resize window handler function
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const toggleResponsiveMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
    if (hamburgerOpen) {
      setMenuClassName('menu--closed');
    } else {
      setMenuClassName('menu--open');
    }
  };

  // Handle click outside the menu to close it
  const handleClickOutside = (event: MouseEvent) => {
    // If the click is outside the menu and the burger, close the menu
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      burgerRef.current &&
      !burgerRef.current.contains(event.target as Node)
    ) {
      setHamburgerOpen(false);
      setMenuClassName('menu--closed');
    }
  };

  // Add event listener to detect clicks outside the menu
  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Add event listener for clicks outside the menu
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listeners when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!hamburgerOpen && checkBurger.current) {
      checkBurger.current.checked = false;
    }
  }, [hamburgerOpen]);

  return (
    <>
      <nav
        ref={menuRef}
        className={`${
          responsive ? `menu--responsive ${menuClassName}` : 'menu'
        }`}
      >
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
        ref={burgerRef}
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
