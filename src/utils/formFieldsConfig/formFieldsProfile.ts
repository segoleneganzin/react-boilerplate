export const formFieldsProfile = {
  email: {
    label: 'Email',
    type: 'email',
    pattern: /\S+@\S+\.\S+/,
    fieldErrorMessage: 'Veuillez renseigner votre email',
  },
  password: {
    label: 'Mot de passe',
    type: 'password',
    // pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    fieldErrorMessage: 'Veuillez renseigner votre mot de passe',
  },
  passwordConfirmation: {
    label: 'Confirmer le mot de passe :',
    type: 'password',
    // pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    fieldErrorMessage: 'Veuillez confirmer votre mot de passe',
  },
  profilePicture: {
    label: 'Photo de profil',
    type: 'file',
    isRequired: false,
  },
  firstName: {
    label: 'Prénom',
    type: 'text',
    fieldErrorMessage: 'Veuillez renseigner votre prénom',
  },
  lastName: {
    label: 'Nom',
    type: 'text',
    fieldErrorMessage: 'Veuillez renseigner votre nom',
  },
  country: {
    type: 'select',
    label: 'Pays',
    defaultValue: 'Choisir votre pays',
    fieldErrorMessage: 'Veuillez renseigner votre pays',
    options: [
      {
        label: 'Angleterre',
        value: 'england',
      },
      {
        label: 'Espagne',
        value: 'spain',
      },
      {
        label: 'France',
        value: 'france',
      },
    ],
  },
  city: {
    label: 'Ville',
    type: 'text',
    fieldErrorMessage: 'Veuillez renseigner votre ville',
  },
};
