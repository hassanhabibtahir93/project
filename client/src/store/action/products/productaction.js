import {UserProducts} from '../../action/types/types'
import axios from 'axios';
const addproducts=(productData)=>dispatch=>{

    axios.post('/api/product/upload',productData)
    .then((res)=>{
        // console.log(res)
    
        dispatch({
            type:UserProducts,
            payload:res.data


        })
    
    
    }
        
  
        
        )

}

export default addproducts