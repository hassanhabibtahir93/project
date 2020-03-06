import axios from 'axios';
import types from '../types/types';
import { GET_ERRORS, SET_USERS,TokenSetToUser } from '../types/types';
const registerUser = (userData, history) => (dispatch) => {

    axios.post('/api/users/rejister', userData)

        .then((res) => {

            // console.log(res.data)

            dispatch({
                type:TokenSetToUser,
                payload:res.data
            })
            // const token = this.props.match.params.token;
            // console.log(token)
            // // history.push('/login')

        }
           
          
             )
        .catch((err) => {
            
          dispatch({
                  type: GET_ERRORS,
                  payload: err.response.data
            })
        })
}

export default registerUser;