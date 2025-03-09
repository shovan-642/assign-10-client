import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const name = user?.displayName
    ? user.displayName.toUpperCase()
    : "No Username";
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-center items-center py-10">
        <div className="card bg-base-100 shadow-sm">
            <h1 className="uppercase font-bold text-center text-3xl py-3">Welcome <span className="text-red-600">{name}</span></h1>
          <figure>
            <img
              src={user.photoURL}
              alt="my photo"
            />
          </figure>
          <div className="card-body">
            <p className="text-gray-500">Email: {user.email}</p>
            <p className="text-gray-500">Account Creation Time: {user.metadata.creationTime}</p>
            <p className="text-gray-500">Last Sign In Time: {user.metadata.lastSignInTime}</p>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <Link to={"/auth/update"} className="btn btn-ghost text-white bg-red-600 border-0">Update Profile</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
