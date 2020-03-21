import { combineReducers } from 'redux';
import errors from '../raducers/error/error'
import Auth from '../raducers/auth/autUser'
import userprofiles from '../raducers/Adminreudcer/allusers/Allusersreducer'
import userVerification from '../raducers/verifiyUser/userVerification';
import UserProducts from '../raducers/Products/product';
const rootReducer = combineReducers({
    erorr:errors,
    auth:Auth,
    profile:userprofiles,
    Verification:userVerification,
    Products:UserProducts, 

})
export default rootReducer;