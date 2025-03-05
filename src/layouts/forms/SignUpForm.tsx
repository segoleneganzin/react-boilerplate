import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { Form } from 'sg-form-lib';
import { formFieldsProfile } from '../../utils/formFieldsConfig/formFieldsProfile';
import {
  createProfileAsync,
  selectProfile,
  selectProfileError,
  resetProfileStatus,
  selectProfileStatus,
} from '../../features/profileSlice';
import { loginAsync } from '../../features/authSlice';
import Loader from '../../components/Loader';
import { I_Profile } from '../../interfaces/profile.interface';
import SignLink from '../../components/SignLink';

interface I_FormData extends I_Profile {
  passwordConfirmation: string;
}

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Get states from the Redux store
  const profile = useAppSelector(selectProfile);
  const profileStatus = useAppSelector(selectProfileStatus);
  const errorprofile = useAppSelector(selectProfileError);

  const [errorMessage, setErrorMessage] = useState('');
  const [logPassword, setLogPassword] = useState<string>('');

  const handleForm = async (datas: Partial<I_FormData>) => {
    try {
      setErrorMessage('');
      if (!(datas.password === datas.passwordConfirmation)) {
        throw new Error('Les mots de passe ne correspondent pas');
      }
      const newprofile: I_Profile = {
        email: datas.email!,
        password: datas.password!,
        profilePicture: datas.profilePicture!,
        firstName: datas.firstName!,
        lastName: datas.lastName!,
        city: datas.city!,
        country: 'France',
        role: datas.role!,
      };
      setLogPassword(datas.password!);
      dispatch(createProfileAsync(newprofile));
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Une erreur inconnue est survenue'
      );
    }
  };

  useEffect(() => {
    if (profileStatus === 'succeeded' && profile) {
      const loginDatas = {
        email: profile.email,
        password: logPassword,
      };
      dispatch(resetProfileStatus());
      dispatch(loginAsync(loginDatas));
    }
  }, [profileStatus, profile, logPassword, dispatch, navigate]);

  if (profileStatus === 'succeeded') {
    return <Loader />;
  }

  const fieldNames = [];
  fieldNames.push(
    'email',
    'password',
    'passwordConfirmation',
    'profilePicture',
    'firstName',
    'lastName',
    'city'
  );

  return (
    <>
      <SignLink
        text={'Vous avez déjà un compte ?'}
        linkTo={'/sign-in'}
        linkText={'Connexion'}
      />
      <Form
        fieldsConfig={formFieldsProfile}
        onSubmitFunction={handleForm}
        btnText={"M'inscrire"}
        errorMessage={errorMessage || errorprofile}
        title={'Inscription'}
        fieldNames={fieldNames}
      />
    </>
  );
};

export default SignUpForm;
