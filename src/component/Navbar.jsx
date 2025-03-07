import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

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
        <div>
            <div className="nav-container">
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
{links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <div className='btn btn-ghost'>
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