import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleAsyncActions } from '../utils/redux/slicerFunctions';
import {
  createProfile,
  getProfileById,
  updateProfile,
  deleteProfile,
} from '../services/profileApi';
import {
  I_ProfileUpdate,
  I_Profile,
  I_ProfileDocument,
} from '../interfaces/profile.interface';
import { updateLog } from '../services/authApi';
import { I_Auth } from '../interfaces/auth.interface';

const CREATE_PROFILE = 'profile/createProfile';
const GET_PROFILE = 'profile/getProfileById';
const UPDATE_PROFILE = 'profile/updateProfile';
const DELETE_PROFILE = 'profile/deleteProfile';
const UPDATE_LOG = 'profile/updateLog';

export const createProfileAsync = createAsyncThunk(
  CREATE_PROFILE,
  async (datas: I_Profile) => {
    const response = await createProfile(datas);
    return response;
  }
);
export const getProfileByIdAsync = createAsyncThunk(
  GET_PROFILE,
  async (id: string) => {
    const response = await getProfileById(id);
    return response;
  }
);
export const updateProfileAsync = createAsyncThunk(
  UPDATE_PROFILE,
  async ({ datas, token }: { datas: I_ProfileUpdate; token: string }) => {
    const response = await updateProfile({ datas, token });
    return response;
  }
);
export const updateLogAsync = createAsyncThunk(
  UPDATE_LOG,
  async ({ datas, token }: { datas: I_Auth; token: string }) => {
    const response = await updateLog({ datas, token });
    return response;
  }
);
export const deleteProfileAsync = createAsyncThunk(
  DELETE_PROFILE,
  async (token: string) => {
    const response = await deleteProfile(token);
    sessionStorage.clear();
    return response;
  }
);

interface I_ProfileState {
  profile: I_ProfileDocument | null;
  status: string;
  error: string | null;
}

const storedProfile = sessionStorage.getItem('profile');

const initialState: I_ProfileState = {
  profile: storedProfile ? JSON.parse(storedProfile) : null,
  status: 'idle',
  error: null,
};

// Redux slice for profile state management
export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    resetProfileStatus: (state) => {
      state.status = 'idle';
      state.error = null;
    },
    clearProfile: (state) => {
      sessionStorage.removeItem('profile');
      state.profile = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    handleAsyncActions(builder, createProfileAsync, 'profile');
    handleAsyncActions(builder, getProfileByIdAsync, 'profile');
    handleAsyncActions(builder, updateProfileAsync, 'profile');
    handleAsyncActions(builder, updateLogAsync, 'profile');
    handleAsyncActions(builder, deleteProfileAsync, 'profile');
  },
  selectors: {
    selectProfile: (state) => state.profile,
    selectProfileStatus: (state) => state.status,
    selectProfileError: (state) => state.error,
  },
});

export const { resetProfileStatus, clearProfile } = profileSlice.actions;

export const { selectProfile, selectProfileStatus, selectProfileError } =
  profileSlice.selectors;

export default profileSlice.reducer;
