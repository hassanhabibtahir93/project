import {ADDTOCARTITEMSS} from '../../action/types/types'
export const addtoCartValue=(id)=>dispatch=>{

   

    dispatch({
        type:ADDTOCARTITEMSS,
        payload:id
    })

}

// export const getAllProduts=()=>(dispatch)=>{

//     axios.get('http://localhost:8080/api/product/allProduts').then((res)=>{

      

//         dispatch({
//             type:getAllProducts,
//             payload:res.data


//         })

   
// })

// }