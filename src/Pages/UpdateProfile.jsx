import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { updatedProfile } = useContext(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    updatedProfile({ displayName: name, photoURL: photo })
      .then(() => {
        navigate("/auth/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className=" bg-black  text-white pb-10">
      <h1 className="text-center text-2xl pt-5">Update Profile</h1>
      <br />
      <div className="flex justify-center">
      <form onSubmit={handleUpdateProfile} className="fieldset">
        <label className="fieldset-label text-white">Name</label>
        <input name="name" type="name" className="input" placeholder="Name" />
        <label className="fieldset-label text-white">Photo URL</label>
        <input
          name="photo"
          type="photo"
          className="input"
          placeholder="Photo URL"
        />
        <button className="btn btn-neutral mt-4 bg-red-600">Update Profile</button>
      </form>
    </div>
    </div>
  );
};

export default UpdateProfile;
