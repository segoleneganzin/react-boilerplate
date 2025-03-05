import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { logout, selectLogin } from '../../features/authSlice';
import { clearProfile, selectProfile } from '../../features/profileSlice';
import Button from '../../components/Button';
import { useState } from 'react';
import SettingsIcon from '../../components/icons/SettingsIcon';

const Menu = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const profile = useAppSelector(selectProfile);
  const login = useAppSelector(selectLogin);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logoutSession = () => {
    dispatch(logout());
    dispatch(clearProfile());
    navigate('/');
  };

  return (
    <>
      <Button
        handleClick={toggleMenu}
        classname='app-navigation__btn'
        content={<SettingsIcon />}
        ariaLabel='Ouvrir le menu'
      />
      {isMenuOpen && (
        <div className='menu'>
          {!profile && !login && (
            <Link to={'/sign-in'} className='menu__link'>
              Connexion
            </Link>
          )}
          {!profile && !login && (
            <Link to={'/sign-up'} className='menu__link'>
              Inscription
            </Link>
          )}
          {profile && login && (
            <>
              <Link to={'/settings'} className='menu__link'>
                Paramètres
              </Link>
              <Link to={`/profile/${profile?.id}`} className='menu__link'>
                Profil
              </Link>
              <Button
                handleClick={logoutSession}
                classname='menu__button'
                content='Déconnexion'
              />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Menu;
