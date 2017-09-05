import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';

export function createEvent(event, id) {
  return dispatch => {
    return axios.post(`/api/events/${id}`, event);
  };
}

