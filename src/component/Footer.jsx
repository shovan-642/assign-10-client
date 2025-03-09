import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#202020] py-8">
      <div className="w-11/12 mx-auto">
        <footer className="footer text-base-content p-10 grid md:grid-cols-3">
          <aside>
            <Link to={"/"} className="text-2xl font-bold text-white">
            <a className="text-white bg-red-600 font-bold text-2xl py-2 px-2">CINEFLIX</a>
            </Link>
          </aside>
          <ul className="text-white">
            <h6 className="footer-title">Menu</h6>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/auth/profile"}>My Profile</Link>
            </li>
            <li>
              <Link to={"/auth/update"}>Update Profile</Link>
            </li>
            <li>
              <Link to={"/allmovies"}>ALL Movies</Link>
            </li>
            <li>
              <Link to={"/addmovie"}>Add Movie</Link>
            </li>
            <li>
              <Link to={"/myFavoriteMovies"}>My Favorite Movie</Link>
            </li>
          </ul>
          <nav>
            <h6 className="footer-title text-white">Contact Us</h6>
            <div className="text-red-600 flex gap-3 text-xl">
              <a target="_blank" href="https://www.facebook.com/">
                <FaFacebook></FaFacebook>
              </a>
              <a target="_blank" href="https://www.instagram.com/">
                <FaInstagram></FaInstagram>
              </a>
              <a target="_blank" href="https://www.whatsapp.com/">
                <FaWhatsapp></FaWhatsapp>
              </a>
              <a target="_blank" href="https://x.com/?lang=en&mx=2">
                <FaX></FaX>
              </a>
              <a target="_blank" href="https://www.youtube.com">
                <FaYoutubeSquare></FaYoutubeSquare>
              </a>
            </div>
          </nav>
        </footer>
        <p className="text-gray-500 text-center">Copyright © CINEFLIX 2025 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
