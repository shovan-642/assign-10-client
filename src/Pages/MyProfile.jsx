import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const MyProfile = () => {

    const {user} = useContext(AuthContext)
    const name = user?.displayName ? user.displayName.toUpperCase():"No Username"
    return (
        <div>
            <h1>{name}</h1>
            <img className='w-40 h-40' src={user.photoURL} alt="" />
        </div>
    );
};

export default MyProfile;