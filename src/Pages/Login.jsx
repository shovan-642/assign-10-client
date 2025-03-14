import React, { useContext, useRef, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

  const location = useLocation()

  const auth = getAuth(app)

  const {login, setUser}=useContext(AuthContext)

  const emailRef = useRef()

  const [error, setError]=useState({})
  const [showPassword, setShowPassword]= useState(false)

  const navigate = useNavigate()

    const handleLogin = (e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        login(email, password)

        .then((result)=>{
          const user =  result.user
          setUser(user)
          navigate(location?.state ? location.state: "/")
        })
        .catch((err)=>{
          setError({...error, login: err.code})
        })
    }

    const handleForgetPassword = () =>{
      const email = emailRef.current.value
      if(!email){
        alert('please provide an email address')
      }
      else{
        sendPasswordResetEmail(auth, email)
        .then(()=>{
          alert('password reset email send, Please check your email')
        })
      }
    }


  return (
    <div className=" bg-black  text-white">
      <h1 className="text-center text-2xl pt-5">Login</h1>
      <br />
      <div className="flex justify-center">
      <form onSubmit={handleLogin} className="fieldset ">
      <label className="fieldset-label text-white">Email</label>
      <input ref={emailRef} name="email" type="email" className="input" placeholder="Email" />
      <div className="relative">
      <label className="fieldset-label text-white">Password</label>
      <input name="password" type={showPassword?"text":"password"} className="input" placeholder="Password" />
      <button type="button" onClick={()=>setShowPassword(!showPassword)} className="btn btn-xs absolute right-6 top-7">
        {
          showPassword?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
        }
      </button>
      </div>
      <div onClick={handleForgetPassword}>
        <a className="link link-hover">Forgot password?</a>
      </div>
      <button className="btn btn-neutral bg-red-600 mt-4">Login</button>
      </form> 
      </div>

      <div className="text-center py-3">
      <label className=''>
            Don't have an Account? 
            <span><Link className="text-red-600 ml-3" to={"/auth/register"}>Register</Link></span>
        </label>

      <div className="text-red-600">
        {
          error.login && (
            <div>
              {error.login}
            </div>
          )
        }

      </div>
      </div>
    </div>
  );
};

export default Login;
