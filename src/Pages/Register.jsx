import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';

const Register = () => {

    const {createUser, setUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const [error, setError]= useState({})

    const handleRegister = (e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        if(password.length<6){
            setError({...error, password: "please input password atleast 6 character"})
            return
        }
        else if (!/[A-Z]/.test(password)){
            setError({...error, password: "please input atleast 1 uppercase"})
            return
        }
        else if (!/[a-z]/.test(password)){
            setError({...error, password: "please input atleast 1 lowercase"})
            return
        }
        setError({...error, password: ""})

        createUser(email, password)

        .then((result)=>{
            const user = result.user
            setUser(user)
            .then(()=>{
                navigate('/')
            })
            .catch(err=>{
                console.log(err)
            })
          })
          .catch((error)=>{
            const errorCode = error.code
            const errorMessage = error.message
            console.log(errorCode, errorMessage)
          })

    }
    
    return (
        <div>
        <h1>Register</h1>
      <form onSubmit={handleRegister} className="fieldset">
      <label className="fieldset-label">Email</label>
      <input name="email" type="email" className="input" placeholder="Email" />
      <label className="fieldset-label">Password</label>
      <input name="password" type="password" className="input" placeholder="Password" />
      <div>
        {error.password && (<label>{error.password}</label>)}
      </div>
      <button className="btn btn-neutral mt-4">Register</button>
      </form> 
        </div>
    );
};

export default Register;