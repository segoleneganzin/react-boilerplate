import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import {
  selectProfile,
  selectProfileError,
  updateProfileAsync,
} from '../../features/profileSlice';
import { useEffect, useState } from 'react';
import { selectLogin } from '../../features/authSlice';
import SettingsForm from '../forms/SettingsForm';
import { I_ProfileUpdate } from '../../interfaces/profile.interface';

const UpdateProfile = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector(selectProfile);
  const login = useAppSelector(selectLogin);
  const profileError = useAppSelector(selectProfileError);

  // const isAdmin = profile?.role === 'admin';

  const [formValues, setFormValues] = useState<I_ProfileUpdate | null>(null);

  useEffect(() => {
    if (profile && profile.id) {
      setFormValues({
        profilePicture: profile.profilePicture,
        firstName: profile.firstName,
        lastName: profile.lastName,
        city: profile.city,
      });
    }
  }, [profile]);

  const handleUpdate = async (formDatas: Partial<I_ProfileUpdate>) => {
    if (!profile || !login) return;
    try {
      formDatas.country = 'France';
      console.log(formDatas);
      await dispatch(
        updateProfileAsync({
          datas: formDatas,
          token: login.token,
        })
      );
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  const fieldNames = [];
  fieldNames.push('profilePicture', 'firstName', 'lastName', 'city');
  return (
    <SettingsForm
      handleSubmit={handleUpdate}
      errorMessage={profileError}
      title={'Modifier mon profil'}
      fieldNames={fieldNames}
      formValues={formValues || {}}
    />
  );
};

export default UpdateProfile;
