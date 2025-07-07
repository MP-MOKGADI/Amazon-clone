import React, {useState} from 'react'
import { Link,useHistory } from 'react-router-dom';
import './Login.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  auth } from './Firebase';

function Login() {
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const history = useHistory();
  

  //  const signIn = (e) => {
  //   e.preventDefault();
  //   auth
  //   .signInWithEmailAndPassword(email,password)
  //   .then((auth)=>{
  //   history.push("/")
  // })
  // .catch((error) => alert(error.message));
  // };
const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed in:", userCredential.user);
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  // );const register = e =>{
  //   e.preventDefault();
  //   auth.createUserWithEmailAndPassword(email,password).then(
  //   (auth) => {
  //     if(auth) {
  //       history.push("/")
  //     }

  //   }).catch((error) => alert(error.message)

  // }
  const register = (e) => {
  e.preventDefault();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successfully created user
      console.log("Registered user:", userCredential.user);
      history.push("/");
    })
    .catch((error) => {
      alert(error.message);
    });
};

   return (
    <div className="login">
      <Link to="/">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Login" className='login_logo'/>
      </Link>
      <div className='login_container'>
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className='login_signInButton' onClick={signIn}>Sign In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button className='login_registerButton' onClick={register}>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
