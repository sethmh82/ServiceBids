import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';

export function updateProfile(profile) {
  return dispatch => {
    return axios.post('/api/profile', profile);
  };
}
