
import { GET_ERRORS } from '../../action/types/types';

const initialState = {
  message: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      debugger;
      return { message: action.payload };
    default:
      return state;
  }
}