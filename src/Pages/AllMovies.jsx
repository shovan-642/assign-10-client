import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '../component/card';

const AllMovies = () => {

    const allMovieData = useLoaderData()




    
    return (
        <div className='w-11/12 mx-auto'>
            <h1>All movies section</h1>
            <div className='grid grid-cols-3 gap-3'>
            {
                allMovieData.map((singleMovie,idx) => <Card key={idx} singleMovie={singleMovie}></Card>)
            }
            </div>
            
        </div>
    );
};

export default AllMovies;