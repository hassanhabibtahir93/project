import {SET_USERS} from '../types/types'; 
  const SetCurrentUser = decoded=>{
      return{
          type:SET_USERS,
          payload:decoded
      }
  }
  export default SetCurrentUser