import {GETUSER_PROFILE,USERPROFILE_LOADING} from '../../../action/types/types'

const initialState={
    loading:false,
    profiles:null
}

export default function(state=initialState,action){
    let newState = JSON.parse(JSON.stringify(state));

    switch(action.type){
     

        case GETUSER_PROFILE:
            return{
                ...newState,
                profile:action.payload,
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