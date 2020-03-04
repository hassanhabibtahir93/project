
import axios from 'axios';
const addproducts=(productData)=>dispatch=>{

    axios.post('/api/product/upload',productData)
    .then((res)=>{console.log(res)})

}

export default addproducts