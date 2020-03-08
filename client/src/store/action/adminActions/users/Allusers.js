import axios from 'axios';
import {GETUSER_PROFILE,USERPROFILE_LOADING} from '../../types/types';


export const getUsersProfiles = ()=>dispatch=>{
      dispatch(ProfileLoading())
axios.get('/api/users/all')
.then(res=>

    dispatch({

        
        type:GETUSER_PROFILE,
        payload: res.data
        
})
)

}

//profile loading
export  const ProfileLoading=()=>{
      return{
        type:USERPROFILE_LOADING
    };
}; 

export  const UserAutentication=userdata=>dispatch=>{

    console.log(userdata)
    return{

    }

}; 

