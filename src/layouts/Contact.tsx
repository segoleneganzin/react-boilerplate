import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
import { Form } from 'sg-form-lib';
import { Modal } from 'sg-library';
import { formFieldsContact } from '../utils/formFieldsConfig/formFieldsContact';

interface I_ContactProps {
  toggleModal: () => void;
  contactModalOpen: boolean;
}

const Contact: React.FC<I_ContactProps> = ({
  toggleModal,
  contactModalOpen,
}) => {
  const [isSend, setIsSend] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [btnText, setBtnText] = useState('Annuler');
  const formValues = {
    recipientEmail: 'test@email.fr',
    // senderFirstname: '',
    // senderLastname: '',
    // senderEmail: '',
    // message: '',
  };

  const sendEmail = () => {
    console.log('send email');
    setIsSend(true);
    setBtnText('Fermer');
    setErrorMessage('');
    // emailjs
    //   .sendForm(
    //     import.meta.env.VITE_MAIL_JS_SERVICE_ID,
    //     import.meta.env.VITE_MAIL_JS_TEMPLATE_ID,
    //     '#contactForm',
    //     import.meta.env.VITE_MAIL_JS_PUBLIC_KEY
    //   )
    //   .then(
    //     () => {
    //       setIsSend(true);
    //       setBtnText('Fermer');
    //     },
    //     (error) => {
    //       console.log(error);
    //       setErrorMessage("Erreur lors de l'envoi");
    //     }
    //   );
  };

  const modalCustomTheme = {
    general: {
      fontSize: '1rem',
      radius: '5px',
      errorColor: 'rgb(181, 38, 7)',
      textColor: 'rgb(255, 255, 255)',
    },
    modal: {
      width: 'fit-content',
      border: 'none',
      backgroundColor: 'rgb(0, 0, 0)',
      overlayBackgroundColor: 'rgba(0, 0, 0, 0.7)',
      boxShadow: `0 20px 30px -10px rgba(0, 0, 0, 0.3), // Stronger shadow effect for dark mode
                0 10px 10px -5px rgba(0, 0, 0, 0.1)`,
    },
    button: {
      border: 'none',
      boxShadow: 'none',
      textColor: 'rgb(247, 235, 235)',
      backgroundColor: 'rgb(74, 75, 75)',
    },
  };

  return (
    <Modal
      isOpen={contactModalOpen}
      toggleModal={toggleModal}
      escapeClose={false} /* Optionnal, default to true */
      overlayClickClose={false} /* Optionnal, default to true */
      showClose={false} /* Optionnal, default to true */
      title='Contact' /* Optionnal, default to null */
      btnText={btnText} /* Optionnal, default to null */
      fadeDuration={300} /* Optionnal, default to 0 */
      customTheme={modalCustomTheme}
    >
      {isSend ? (
        <div className='contact__validation'>
          <p className='text'>Votre demande de contact a bien été envoyée</p>
        </div>
      ) : (
        <div className='contact'>
          <Form
            formId={'contactForm'}
            fieldsConfig={formFieldsContact}
            title={'Contact'}
            subtitle={''}
            btnText={'Envoyer'}
            onSubmitFunction={sendEmail}
            errorMessage={errorMessage}
            fieldNames={[
              'recipientEmail',
              'senderFirstname',
              'senderLastname',
              'senderEmail',
              'message',
            ]}
            fieldValue={formValues}
          />
        </div>
      )}
    </Modal>
  );
};

export default Contact;
