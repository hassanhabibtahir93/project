import {getAllProducts} from '../../action/types/types'


const intialState = {
    prduct:"allproducs",
    AllusersProducts:[]
}

export default function ( state=intialState, action ) {

    let newState = JSON.parse(JSON.stringify(state))
 
    
    switch(action.type){
    
    
    
        case getAllProducts:
    
        // console.log(action.payload)
            return({
             ...newState,
             AllusersProducts:intialState.AllusersProducts.concat(action.payload),
    
            })


            default:
                return newState
    }
    
    


}
