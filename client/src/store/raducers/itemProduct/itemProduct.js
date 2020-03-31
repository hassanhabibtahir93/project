import {GetByIdProducts} from '../../action/types/types'


const intialState = {
    prduct:"userProducts",
    ItemProduct:[]
}

export default function ( state=intialState, action ) {

    let newState = JSON.parse(JSON.stringify(state))
 
    
    switch(action.type){
    
    
    
        case GetByIdProducts:
    
        // console.log(action.payload)
            return({
             ...newState,
             ItemProduct:intialState.ItemProduct.concat(action.payload),
    
            })


            default:
                return newState
    }
    
    


}
