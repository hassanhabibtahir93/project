import {getAllProducts,ADDTOCARTITEMSS,GETCARTPRODUCTS} from '../../action/types/types'


const intialState = {
    addedItems: [],
    prduct:"allproducs",
    AllusersProducts:[],
    cartitems:[]
}

export default function ( state=intialState, action ) {

    let newState = JSON.parse(JSON.stringify(state))
 
    
    switch(action.type){
    
    
    
        case getAllProducts:
    
            
        return({
             ...newState,
            
             AllusersProducts:intialState.AllusersProducts.concat(action.payload),
    
            })

 
      case ADDTOCARTITEMSS:
         var cartItem= localStorage.getItem('cartItem');
         var items=[]
    if(cartItem)
    {
items=JSON.parse(cartItem)
   }
   items.push(action.payload._id)
        localStorage.setItem('cartItem', JSON.stringify(items)); 
        // let cartProduct=JSON.parse(localStorage.getItem('cartItem'));
        // let addedItem = cartProduct
        // console.log(addedItem)

          return{
              ...newState,
            //   addedItems: [...state.addedItems, addedItem],
          }



       case GETCARTPRODUCTS:
        console.log(action.payload) 
        return({
            ...newState,
            cartitems: action.payload,
      
   
           })




            default:
               
             
                return {
                   ...newState,
                    // products: cartProduct != null ? cartProduct : [] ,
                }
    }
    
    


}
