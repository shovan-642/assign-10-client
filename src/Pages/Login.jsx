import React, { useContext, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router";

const Login = () => {

  const location = useLocation()

  const auth = getAuth(app)

  const {login, setUser}=useContext(AuthContext)

  const [error, setError]=useState({})
  const [showpassword, setShowPassword]= useState(false)

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


  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="fieldset">
      <label className="fieldset-label">Email</label>
      <input name="email" type="email" className="input" placeholder="Email" />
      <label className="fieldset-label">Password</label>
      <input name="password" type="password" className="input" placeholder="Password" />
      <div>
        <a className="link link-hover">Forgot password?</a>
      </div>
      <button className="btn btn-neutral mt-4">Login</button>
      </form> 
    </div>
  );
};

export default Login;
