import {UserProducts} from '../../action/types/types'


const intialState = {
    prduct:"userProducts",
    products:[]
}

export default function ( state=intialState, action ) {

    let newState = JSON.parse(JSON.stringify(state))
 
    
    switch(action.type){
    
    
    
        case UserProducts:
    
        // console.log(action.payload)
            return({
             ...newState,
             products:intialState.products.concat(action.payload),
    
            })


            default:
                return newState
    }
    
    


}
