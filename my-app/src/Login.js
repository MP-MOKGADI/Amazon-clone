import React, {useReducer ,useEffect,useState,useContext} from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import AuthContext from './context/AuthContext';
const reducer = (state, action) => {
  if (action.type === 'EMAIL_INPUT') {
    return { ...state, emailValue: action.payload };
  }

  if (action.type === 'PASSWORD_INPUT') {
    return { ...state, passwordValue: action.payload };
  }

  return {emailValue : "", passwordValue : ""};
}

function Login() {
   const ctx = React.useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    emailValue : "", 
    passwordValue : ""});

    useEffect(() => {
      const identifier = setTimeout(() => {
       console.log("CHECKING FORM VALIDITY");
      setFormIsValid(state.emailValue.includes('@') && state.passwordValue.trim().length > 6);
      }, 500);
      return () => {
        console.log("CLEANUP");
        clearTimeout(identifier);
      };
    }, [state.emailValue, state.passwordValue]);

  const emailChangeHandler = e => {
    dispatch({type: 'EMAIL_INPUT',payload: e.target.value});

  };

  const passwordChangeHandler = e => {
  
    dispatch({type: 'PASSWORD_INPUT',payload: e.target.value});
  
  };

  const signIn = (e) => {
    e.preventDefault();

    console.log("Entered email:", state.emailValue);
    console.log("Entered password:", state.passwordValue);
    ctx.onLogin(state.emailValue, state.passwordValue);
  }

   return (
    <div className="login">
      <Link to="/">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Login" className='login_logo'/>
      </Link>
      <div className='login_container'>
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={ state.emailValue} onChange={emailChangeHandler} />
          <h5>Password</h5>
          <input type="text" value={ state.passwordValue} onChange={passwordChangeHandler} />
          <button type="submit" className='login_signInButton' onClick={signIn}>Sign In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button className='login_registerButton'>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
