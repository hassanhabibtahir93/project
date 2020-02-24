import axios from 'axios';
import types from '../types/types';
import { GET_ERRORS, SET_USERS } from '../types/types';
const registerUser = (userData, history) => (dispatch) => {

    axios.post('/api/users/rejister', userData)

        .then(res => history.push('/login'))
        .catch((err) => {
            
          dispatch({
                  type: GET_ERRORS,
                  payload: err.response.data
            })
        })
}

export default registerUser;