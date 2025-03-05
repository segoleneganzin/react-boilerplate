import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import {
  deleteProfileAsync,
  selectProfile,
  selectProfileError,
} from '../../features/profileSlice';
import { selectLogin } from '../../features/authSlice';
import SettingsForm from '../forms/SettingsForm';

const DeleteAccount = () => {
  const dispatch = useAppDispatch();

  const login = useAppSelector(selectLogin);
  const profile = useAppSelector(selectProfile);
  const profileError = useAppSelector(selectProfileError);

  const handleDelete = async () => {
    try {
      if (profile && login) {
        dispatch(deleteProfileAsync(login.token));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SettingsForm
      handleSubmit={handleDelete}
      errorMessage={profileError}
      title={'Supprimer mon compte'}
      subtitle={
        'Attention, cette action est irréversible, toutes vos données seront supprimées.'
      }
      fieldNames={['email', 'password']}
    />
  );
};

export default DeleteAccount;
