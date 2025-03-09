import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { createUser, setUser, updatedProfile, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError({
        ...error,
        password: "please input password atleast 6 character",
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError({ ...error, password: "please input atleast 1 uppercase" });
      return;
    } else if (!/[a-z]/.test(password)) {
      setError({ ...error, password: "please input atleast 1 lowercase" });
      return;
    }
    setError({ ...error, password: "" });

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updatedProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className=" bg-black  text-white">
      <h1 className="text-center text-2xl pt-5">Register</h1>
      <br />
      <div className="flex justify-center">
        <form onSubmit={handleRegister} className="flex flex-col gap-3">
          <label className="fieldset-label text-white">Name</label>
          <input name="name" type="name" className="input" placeholder="Name" />
          <label className="fieldset-label text-white">Photo URL</label>
          <input
            name="photo"
            type="photo"
            className="input"
            placeholder="Photo URL"
          />
          <label className="fieldset-label text-white">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />
          <div className="relative">
            <label className="fieldset-label text-white">Password</label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              className="input"
              placeholder="Password"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute right-6 top-7"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
          </div>
          <div>{error.password && <label>{error.password}</label>}</div>
          <button className="btn w-48 btn-ghost bg-red-600 mt-4">
            Register
          </button>
        </form>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 py-5">
        <button
          className="flex w-48 gap-3 items-center btn btn-accent bg-white"
          onClick={handleGoogleSignIn}
        >
          <FcGoogle></FcGoogle> <span>Login With Google</span>
        </button>
        <div>
          <label className="text-white">
            Already have an Account?
            <span>
              <Link className="text-red-600 ml-3" to={"/auth/login"}>Login</Link>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Register;
