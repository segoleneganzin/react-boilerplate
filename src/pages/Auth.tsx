import { useNavigate } from 'react-router-dom';
import SignUpForm from '../layouts/forms/SignUpForm';
import SignInForm from '../layouts/forms/SignInForm';
import Button from '../components/Button';
import Header from '../layouts/Header';

interface I_AuthProps {
  formType: 'signUp' | 'signIn';
}

const Auth: React.FC<I_AuthProps> = ({ formType }) => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className='main auth'>
        <div className='auth__form-container'>
          {formType === 'signUp' && <SignUpForm />}
          {formType === 'signIn' && <SignInForm />}
        </div>
        <Button
          handleClick={() => navigate(-1)}
          content='Retour'
          classname='auth__btn--cancel'
        />
      </main>
    </>
  );
};

export default Auth;
