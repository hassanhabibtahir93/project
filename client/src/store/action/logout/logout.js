import SetAuthToken from "../utility/setAuthToken"
import SetCurrentUser from "../loginAction/setUser"
import history from '../../../components/history/history'

  const Logout = decode=>dispatch=>{
      localStorage.removeItem('jwtToken')
      //Remove auth header for  future requests
      SetAuthToken(false)
      // curent uer to {} which 
     
      dispatch(SetCurrentUser({}));
    
    history.push('/login');
    }
  export default Logout