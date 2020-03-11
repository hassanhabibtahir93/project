import { combineReducers } from 'redux';
import MenProducts from '../raducers/Products/menProducts';
import errors from '../raducers/error/error'
import Auth from '../raducers/auth/autUser'
import userprofiles from '../raducers/Adminreudcer/allusers/Allusersreducer'
const rootReducer = combineReducers({
Mens:MenProducts, 
erorr:errors,
auth:Auth,
profile:userprofiles

})
export default rootReducer;