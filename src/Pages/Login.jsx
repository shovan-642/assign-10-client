import React from "react";

const Login = () => {

    const handleLogin = (e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
    }


  return (
    <div>
      <h1>Login</h1>
      <fieldset onSubmit={handleLogin} className="fieldset">
      <label className="fieldset-label">Email</label>
      <input name="email" type="email" className="input" placeholder="Email" />
      <label className="fieldset-label">Password</label>
      <input name="password" type="password" className="input" placeholder="Password" />
      <div>
        <a className="link link-hover">Forgot password?</a>
      </div>
      <button className="btn btn-neutral mt-4">Login</button>
      </fieldset> 
    </div>
  );
};

export default Login;
