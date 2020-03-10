import {GETUSER_PROFILE,USERPROFILE_LOADING} from '../../../action/types/types'

const initialState={
    loading:false,
    profiles:null,
    users:[]
}

export default function(state=initialState,action){
    let newState = JSON.parse(JSON.stringify(state));

    switch(action.type){
     

     case GETUSER_PROFILE:
            return{
                ...newState,
                   
                profile:initialState.users.concat(action.payload),
                loading:false
            }

            case USERPROFILE_LOADING:
                return {
                    ...newState,
                    loading:true
                }
                default:
                    return newState
    }


}