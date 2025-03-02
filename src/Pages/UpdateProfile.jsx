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
    <div>
      <form onSubmit={handleUpdateProfile} className="fieldset">
        <label className="fieldset-label">Name</label>
        <input name="name" type="name" className="input" placeholder="Name" />
        <label className="fieldset-label">Photo URL</label>
        <input
          name="photo"
          type="photo"
          className="input"
          placeholder="Photo URL"
        />
        <button className="btn btn-neutral mt-4">Update Profile</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
