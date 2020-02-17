import axios from 'axios';
import { GET_ERRORS } from '../types/types';

const ResetpasswordUser = (userData)=>dispatch=>{
    debugger;
    axios.post('/api/users/reset/'+userData.token,userData)

    .then(res=>{

    })
    .catch((err)=>{
        if (err.response && err.response.data){
            
            dispatch({
               
                        
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
    })
}

export default ResetpasswordUser;