import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '../component/card';

const AllMovies = () => {

    const allMovieData = useLoaderData()




    
    return (
        <div className='w-11/12 mx-auto my-10'>

            <div className='grid grid-cols-3 gap-5'>
            {
                allMovieData.map((singleMovie,idx) => <Card key={idx} singleMovie={singleMovie}></Card>)
            }
            </div>
            
        </div>
    );
};

export default AllMovies;