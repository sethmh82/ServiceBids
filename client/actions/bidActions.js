import axios from 'axios';


export function bidCategory(bid, id) {
  return dispatch => {
    return axios.post(`/api/events/${id}`, bid);
  };
}