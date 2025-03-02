import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {

    const {createUser, setUser, updatedProfile, signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()

    const [error, setError]= useState({})
    const [showPassword, setShowPassword]= useState(false)

    const handleRegister = (e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

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
            updatedProfile({displayName: name, photoURL: photo})
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

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user)
            navigate("/")
        })
        .catch(error=> console.log(error.message))
    }
    
    return (
        <div>
        <h1>Register</h1>
      <form onSubmit={handleRegister} className="fieldset">
      <label className="fieldset-label">Name</label>
      <input name="name" type="name" className="input" placeholder="Name" />
      <label className="fieldset-label">Photo URL</label>
      <input name="photo" type="photo" className="input" placeholder="Photo URL" />
      <label className="fieldset-label">Email</label>
      <input name="email" type="email" className="input" placeholder="Email" />
      <div className="relative">
      <label className="fieldset-label">Password</label>
      <input name="password" type={showPassword?"text":"password"} className="input" placeholder="Password" />
      <button type="button" onClick={()=>setShowPassword(!showPassword)} className="btn btn-xs absolute right-6 top-7">
        {
          showPassword?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
        }
      </button>
      </div>
      <div>
        {error.password && (<label>{error.password}</label>)}
      </div>
      <button className="btn btn-neutral mt-4">Register</button>
      </form> 
        <button onClick={handleGoogleSignIn}>
            Login With Google
        </button>
        <label className=''>
            Already have an Account? 
            <span><Link to={"/auth/login"}>Login</Link></span>
        </label>
        </div>
    );
};

export default Register;