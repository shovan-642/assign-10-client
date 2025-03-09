import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Card from '../component/card';
import { AuthContext } from '../Provider/AuthProvider';
import Loader from './Loader';

const AllMovies = () => {


    
        const{loading} = useContext(AuthContext)
        
        const [movieData, setMovieData]=useState([])
        
        const allMovieData = useLoaderData()
        const [search, setSearch]= useState("")

        useEffect(()=>{
            fetch(`https://assign-10-server-phi.vercel.app/movies?search=${search}`)
            .then((res)=>res.json())
            .then((data)=>setMovieData(data))
            .catch((error)=>console.log(error))
        },[search])

        useEffect(()=>{
            if(allMovieData){
                setMovieData(allMovieData)
            }
        },[allMovieData])
    
        if(loading || !movieData){
            return <Loader></Loader>
        }

        
        console.log(search)



    
    return (
        <div className='w-11/12 mx-auto pb-20'>

            <div className="search my-5 text-center">
            <input name='search' onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search here" className="input text-white" />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                movieData.map((singleMovie,idx) => <Card key={idx} singleMovie={singleMovie}></Card>)
            }
            </div>
            
        </div>
    );
};

export default AllMovies;