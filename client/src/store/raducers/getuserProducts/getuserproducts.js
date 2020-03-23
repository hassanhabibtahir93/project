import {getUserProducts} from '../../action/types/types'


const intialState = {
    prduct:"userProducts",
    UserProducts:[]
}

export default function ( state=intialState, action ) {

    let newState = JSON.parse(JSON.stringify(state))
 
    
    switch(action.type){
    
    
    
        case getUserProducts:
    
        // console.log(action.payload)
            return({
             ...newState,
             UserProducts:intialState.UserProducts.concat(action.payload),
    
            })


            default:
                return newState
    }
    
    


}
