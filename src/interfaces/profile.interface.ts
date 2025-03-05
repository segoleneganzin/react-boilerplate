export type T_Role = 'normal' | 'admin';
export interface I_Profile {
  email?: string;
  password?: string;
  role: T_Role;
  profilePicture?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  country?: string;
}
export interface I_ProfileDocument {
  id: string;
  email: string;
  role: T_Role;
  profilePicture?: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
}

export interface I_ProfileUpdate {
  email?: string;
  password?: string;
  passwordConfirmation?: string;
  role?: T_Role;
  profilePicture?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  country?: string;
}
