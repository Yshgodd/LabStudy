import {React, useState} from 'react'
import ImageIcon from '@mui/icons-material/Image';
import { auth } from "../firebase";
import {useNavigate, Link} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";


function Login() {

  const [err,setErr]= useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    try{
     await signInWithEmailAndPassword(auth, email, password);
     navigate("/");
    } catch (err) {
      const errorCode = err.code;
      const errorMessage = err.message;
      if(errorMessage){
      alert("비밀번호 오류 입니다.");
    }
      setErr(true);
    }
  };

  return (
    <div className= 'formContainer'>
      <div className = 'formWrapper'>
        <span className="logo">Lama Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder = 'email' />
          <input type="password" placeholder = 'password' />
          <button>Sign in</button>
          {err && <span>오류발생</span>}
        </form>
        <p>계정이 없나요? <Link to ="/register">Register</Link></p>
      </div>
    </div>
  )
}

export default Login;