import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import FavoriteCard from '../component/FavoriteCard';

const MyFavourtieMovie = () => {

    const {user} = useContext(AuthContext)

    const userEmail = user?.email

    const myFavoriteMovies = useLoaderData()
    const [movie, setMovie]=useState(myFavoriteMovies)

    useEffect(()=>{
        const filteredUserFav = myFavoriteMovies.filter(favMov => favMov.user_email === userEmail)
        setMovie(filteredUserFav)
    },[myFavoriteMovies, userEmail])

    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-20'>
            {
                movie.map((mov,idx)=><FavoriteCard key={idx} mov={mov} movie={movie} setMovie={setMovie}></FavoriteCard>)
            }
            </div>
        </div>
    );
};

export default MyFavourtieMovie;