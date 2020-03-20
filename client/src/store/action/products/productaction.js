import {UserProducts} from '../../action/types/types'
import axios from 'axios';
import history from '../../../components/history/history'
const addproducts=(productData)=>dispatch=>{

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

export default addproducts