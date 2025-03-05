import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const MovieDetails = () => {

    const {movie, setMovie, user}=useContext(AuthContext)

      const user_email = user?.email

    const movieDetailsData = useLoaderData()
    const {_id, movie_poster, movie_title, genre, duration, release_year, rating, summary}=movieDetailsData




    const handleDelete=(_id)=>{


            console.log(_id)
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
    
                  fetch(`http://localhost:5000/movies/${_id}`,{
                    method: "DELETE",
    
                  })
                  .then (res=>res.json())
                  .then (data => {
                    console.log(data)
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Movie has been deleted.",
                            icon: "success"
                          });
                          const remaining = movie.filter(mov=>mov._id!== _id)
                          setMovie(remaining)
                    }
                  })
                }
              });
        }


        const handleAddtoFavorite = (movieDetailsData)=>{



            const movie_poster = movieDetailsData.movie_poster
            const movie_title = movieDetailsData.movie_title
            const genre = movieDetailsData.genre
            const duration = movieDetailsData.duration
            const release_year = movieDetailsData.release_year
            const rating = movieDetailsData.rating
            const summary = movieDetailsData.summary
        
            const FavoriteMovieData = {movie_poster, movie_title, genre, duration, release_year, rating, summary, user_email}

            console.log(FavoriteMovieData)

                fetch('http://localhost:5000/favoriteMovies', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(FavoriteMovieData)
            
                })
                .then (res=>res.json())
                .then (data=>{
                    console.log(data)
                    if(data.insertedId){
                        Swal.fire({
                            title: 'Success!',
                            text: 'Movie added successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                      
                    }
                    
                })

        }
    


    return (
        <div>
            <img src={movie_poster} alt="" />
            <h1>{movie_title}</h1>

            <Link to={`/updatemovie/${_id}`}><button className='btn btn-accent' type="button">Edit</button></Link> 
            <button onClick={()=>handleDelete(_id)} className='btn btn-accent' type="button">Delete</button>
            <button onClick={()=>handleAddtoFavorite(movieDetailsData)} className='btn btn-accent' type="button">Add to Favorite</button>
        </div>
    );
};

export default MovieDetails;