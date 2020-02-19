import axios from 'axios';
import { GET_ERRORS } from '../types/types';

const resetAction = userData=>dispatch=>{
    axios.post('/api/users/forgetpassword',userData)
    .then(res=>{
console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
        if (err.response && err.response.data){
            
            dispatch({
               
                        
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
    })
}

export default resetAction;