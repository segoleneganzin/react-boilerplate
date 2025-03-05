import { I_ApiResponse } from '../interfaces/api.interface';
import { I_Auth, I_Login } from '../interfaces/auth.interface';
import { I_ProfileDocument } from '../interfaces/profile.interface';
import { callApiWrapper } from './api';

/**
 * Asynchronous function to perform profile login via API.
 * @param {I_ProfileLogin} loginDatas - profile's email and password.
 * @returns {Promise<object>} - Promise resolving to the API response data, return a jwt token.
 * @throws {Error} - Throws an error if email or password is missing or if login fails.
 */
export const login = async (
  loginDatas: I_Auth
): Promise<I_ApiResponse<I_Login>> => {
  try {
    return await callApiWrapper<I_Login, I_Auth>({
      method: 'POST',
      url: `/auth`,
      datas: loginDatas,
      isFormData: false,
    });
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'An unknown error occurred'
    );
  }
};

export const updateLog = async ({
  datas,
  token,
}: {
  datas: I_Auth;
  token: string;
}): Promise<I_ApiResponse<I_ProfileDocument>> => {
  try {
    return await callApiWrapper<I_ProfileDocument, I_Auth>({
      method: 'PATCH',
      url: `/auth`,
      datas,
      token,
      isFormData: false,
    });
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'An unknown error occurred'
    );
  }
};
