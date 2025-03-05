import { I_ApiResponse } from '../interfaces/api.interface';
import {
  I_ProfileUpdate,
  I_Profile,
  I_ProfileDocument,
} from '../interfaces/profile.interface';
import { callApiWrapper } from './api';

export const createProfile = async (
  datas: I_Profile
): Promise<I_ApiResponse<I_ProfileDocument>> => {
  return await callApiWrapper<I_ProfileDocument, I_Profile>({
    method: 'POST',
    url: `/profiles`,
    datas,
  });
};

export const getProfileById = async (
  id: string
): Promise<I_ApiResponse<I_ProfileDocument>> => {
  return await callApiWrapper<I_ProfileDocument>({
    method: 'GET',
    url: `/profiles/${id}`,
  });
};

export const updateProfile = async ({
  datas,
  token,
}: {
  datas: I_ProfileUpdate;
  token: string;
}): Promise<I_ApiResponse<I_ProfileDocument>> => {
  return await callApiWrapper<I_ProfileDocument, I_ProfileUpdate>({
    method: 'PATCH',
    url: `/profiles`,
    token,
    datas,
  });
};

export const deleteProfile = async (
  token: string
): Promise<I_ApiResponse<void>> => {
  return await callApiWrapper<void>({
    method: 'DELETE',
    url: `/profiles`,
    token,
  });
};
