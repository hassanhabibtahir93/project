import {getAllProducts,ADDTOCARTITEMSS} from '../../action/types/types'


const intialState = {
    addedItems: [],
    prduct:"allproducs",
    AllusersProducts:[],
    UniqueItem:[]
}

export default function ( state=intialState, action ) {

    let newState = JSON.parse(JSON.stringify(state))
 
    
    switch(action.type){
    
    
    
        case getAllProducts:
    
            localStorage.setItem('cartItem', JSON.stringify(action.payload));  
        return({
             ...newState,
            
             AllusersProducts:intialState.AllusersProducts.concat(action.payload),
    
            })

 
      case ADDTOCARTITEMSS:
 
        let cartProduct=JSON.parse(localStorage.getItem('cartItem'));
        let addedItem = cartProduct.find(item=>item._id===action.payload)
        console.log(addedItem)

          return{
              ...newState,
              addedItems: [...state.addedItems, addedItem],
          }


            default:
               
             
                return {
                   ...newState,
                    // products: cartProduct != null ? cartProduct : [] ,
                }
    }
    
    


}
