import axios from 'axios'

export function newMessage(msg, id) {
  return dispatch => {
    return axios.post(`/api/chat/${id}`, msg);
  };
}