import {GETUSER_PROFILE,USERPROFILE_LOADING,RemoveElemets} from '../../../action/types/types'

const initialState={
    name:"hassanhabib",
    loading:false,
    profiles:null,
    users:[]
}

export default function(state=initialState,action){
    let newState = JSON.parse(JSON.stringify(state));

    switch(action.type){
     

     case GETUSER_PROFILE:
     
     return({
                
                ...newState,
                // users: action.payload,
                // array:state.users.concat([action.payload]),
                users:initialState.users.concat(action.payload),
                loading:false
            })

            case RemoveElemets:
                console.log("reducerindex",action.payload)
                return{
                    users: [
                        newState.users.splice(action.payload,1),
                    ],
                    ...newState,
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