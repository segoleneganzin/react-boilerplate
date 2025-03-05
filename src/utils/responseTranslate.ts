enum ErrorKeys {
  AuthorizationHeaderMissing = 'Authorization header is missing',
  PasswordRequired = 'Password is required',
  UserNotFound = 'User not found',
  EmailAlreadyExists = 'Email already exists',
  ProfileCreationFailed = 'Profile creation failed',
  InvalidIdSupplied = 'Invalid ID supplied',
  InvalidUsernamePasswordSupplied = 'Invalid username/password supplied',
  InvalidPictureFormat = 'Invalid file type. Only JPG, JPEG, and PNG files are allowed.',
}

const errorMessages: Record<ErrorKeys, string> = {
  [ErrorKeys.AuthorizationHeaderMissing]:
    "L'en-tête d'autorisation est manquant",
  [ErrorKeys.PasswordRequired]: 'Le mot de passe est requis',
  [ErrorKeys.UserNotFound]: 'Utilisateur non trouvé',
  [ErrorKeys.EmailAlreadyExists]: "L'email existe déjà",
  [ErrorKeys.ProfileCreationFailed]: 'La création du profil a échoué',
  [ErrorKeys.InvalidIdSupplied]: 'ID fourni invalide',
  [ErrorKeys.InvalidUsernamePasswordSupplied]:
    "Nom d'utilisateur/mot de passe invalide",
  [ErrorKeys.InvalidPictureFormat]:
    "Format d'image invalide. Formats acceptés : JPG, JPEG, PNG.",
};

export const translateMessage = (message: string): string => {
  console.log(message);
  // return translation or original message if no translation founded
  return errorMessages[message as ErrorKeys] || message;
};
