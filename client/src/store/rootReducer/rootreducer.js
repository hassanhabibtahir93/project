import { combineReducers } from 'redux';
import MenProducts from '../raducers/Products/menProducts';
import errors from '../raducers/error/error'
import Auth from '../raducers/auth/autUser'
const rootReducer = combineReducers({
Mens:MenProducts, 
erorr:errors,
auth:Auth
})
export default rootReducer;