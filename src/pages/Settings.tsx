import UpdateLog from '../layouts/admin/UpdateLog';
import UpdateProfile from '../layouts/admin/UpdateProfile';
import PageLayout from '../layouts/templates/PageLayout';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import {
  resetProfileStatus,
  selectProfileStatus,
} from '../features/profileSlice';
import DeleteAccount from '../layouts/admin/DeleteAccount';
import Button from '../components/Button';
import Loader from '../components/Loader';

type T_SettingType = 'log' | 'profile' | 'deleteAccount' | null;
const Settings = () => {
  const dispatch = useAppDispatch();

  const [settingType, setSettingType] = useState<T_SettingType>(null);

  const profileStatus = useAppSelector(selectProfileStatus);

  const handleSettings = useCallback((setting: T_SettingType) => {
    setSettingType(setting);
    // if (setting === null) {
    //   sessionStorage.removeItem('isSettingOpen');
    // } else {
    //   sessionStorage.setItem('isSettingOpen', 'true');
    // }
  }, []);

  useEffect(() => {
    if (profileStatus === 'succeeded' && settingType !== 'deleteAccount') {
      const timeoutId = setTimeout(() => {
        dispatch(resetProfileStatus());
        setSettingType(null);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [dispatch, profileStatus, settingType]);

  const renderForm = () => {
    if (profileStatus === 'succeeded') {
      return (
        <>
          <p className='text settings__validation-message'>
            {settingType === 'deleteAccount'
              ? 'Votre compte a bien été supprimé, vous allez être redirigé vers la page principale'
              : 'Les modifications ont été éffectuées avec succès'}
          </p>
          <Loader />
        </>
      );
    }
    if (settingType === 'profile') {
      return <UpdateProfile />;
    } else if (settingType === 'log') {
      return <UpdateLog />;
    } else if (settingType === 'deleteAccount') {
      return <DeleteAccount />;
    }
  };

  return (
    <PageLayout mainClassName='settings'>
      <h2 className='settings__title'>Paramètres</h2>
      {settingType === null && (
        <div className='settings__choices'>
          <Button
            handleClick={() => handleSettings('log')}
            content='Modifier mes informations de connexion'
            classname='settings__btn'
          />
          <Button
            handleClick={() => handleSettings('profile')}
            content='Modifier mon profil'
            classname='settings__btn'
          />
          <Button
            handleClick={() => handleSettings('deleteAccount')}
            content='Supprimer mon compte'
            classname='settings__btn settings__btn--delete'
          />
        </div>
      )}
      {renderForm()}
      {settingType && profileStatus !== 'succeeded' && (
        <Button
          handleClick={() => handleSettings(null)}
          classname='btn settings__btn--cancel'
          content='Annuler'
        />
      )}
    </PageLayout>
  );
};

export default Settings;
