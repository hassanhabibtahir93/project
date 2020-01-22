import { combineReducers } from 'redux';
import MenProducts from '../raducers/Products/menProducts';


const rootReducer = combineReducers({
Mens:MenProducts, 
})
export default rootReducer;