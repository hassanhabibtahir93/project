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

export  const DeleteUserprofile=id=>dispatch=>{
 const user= window.confirm("are you sure you want to delete  user")
 if(user){
    axios.delete(`/api/users/deleteUser/${id}`).then((user)=>{
    console.log(user)
})
 
 }

}; 

export const updataElement=data=>dispatch=>{
    console.log(data)
    axios.put(`/api/users/updateUser/${data.id}`,data)
    .then(res=>console.log(res.data))



} 