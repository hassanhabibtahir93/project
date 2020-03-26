import {UserProducts,getUserProducts} from '../../action/types/types'
import axios from 'axios';
import history from '../../../components/history/history'
 export const addproducts=(productData)=>dispatch=>{

    axios.post('/api/product/upload',productData)
    .then((res)=>{
        // console.log(res)
        history.push('/dashboard')
        dispatch({
            type:UserProducts,
            payload:res.data


        })
    
    
    }
        
  
        
        )

}



export const getuserallproducts=(user)=>dispatch=>{

   axios.post('http://localhost:8080/api/product/getallproducts',user).then((res)=>{





   dispatch({
            type:getUserProducts,
            payload:res.data


        })
  
  })

}
