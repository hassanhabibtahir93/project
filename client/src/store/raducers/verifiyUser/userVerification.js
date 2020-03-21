import {UserVerfication} from '../../action/types/types'
import { act } from 'react-dom/test-utils'




const initialState = {

    verification: "userverificaion",
    loading: false,
    Userverified: null

}

function UserVerify(state=initialState,action) {

    let newState = JSON.parse(JSON.stringify(state))
 
    
switch(action.type){



    case UserVerfication:

    console.log(action.payload)
        return{
         ...newState,
         Userverified:action.payload

        }
       
            default:
                return newState
}




}
export default UserVerify



