import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FaRegUserCircle } from 'react-icons/fa';
import './component.css'

const Navbar = () => {

    const {user, logout}= useContext(AuthContext)

    const links = <>
      <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/auth/profile"}>My Profile</NavLink></li>
      <li><NavLink to={"/auth/update"}>Update Profile</NavLink></li>
      <li><NavLink to={"/allmovies"}>ALL Movies</NavLink></li>
      <li><NavLink to={"/addmovie"}>Add Movie</NavLink></li>
      <li><NavLink to={"/myFavoriteMovies"}>My Favorite Movie</NavLink></li>
    </>


    

    return (
        <div className='bg-[#202020] sticky top-0 z-100'>
            <div className="nav-container w-11/12 mx-auto text-[#707070]">
            <div className="navbar shadow-sm">
  <div className="navbar-start">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu nav-hover menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
{links}
      </ul>
    </div>
    <a className="text-white bg-red-600 font-bold text-2xl py-2 px-2">CINEFLIX</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu nav-hover menu-horizontal px-1 uppercase font-bold">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    
    <div>
      {
        user && user?.email ? (<div>
          {
            user.photoURL ? (<img className='w-12 h-12 rounded-full mr-3' src={user.photoURL} alt="" title={user.displayName} />) :
            (<FaRegUserCircle className='mr-3 text-3xl'></FaRegUserCircle>)
          }
        </div>): (<FaRegUserCircle className='mr-3 text-3xl'></FaRegUserCircle>)
      }
    </div>
    <div className='btn btn-ghost bg-red-600 text-white'>
        {
            user && user?.email? (<button onClick={logout}>Logout</button>):(<div><Link to={"/auth/login"}>Login</Link></div>)
        }

    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Navbar;