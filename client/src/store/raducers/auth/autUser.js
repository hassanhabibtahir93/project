import isEmpty from '../validation/isEmpty';
import {SET_USERS,TokenSetToUser } from '../../action/types/types'
const intialState={

    isAuthenticated: false,
    user:[]

};

export default function (state=intialState, action){

    switch(action.type){
        case SET_USERS:
            return{
                ...state,
                isAuthenticated:!isEmpty(action.payload),
                user:action.payload
            }
         case TokenSetToUser:
             return{
                 ...state,
                 user:action.payload
             }
            

            default:
                return state
    }

    


}