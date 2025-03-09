import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const MovieDetails = () => {

    const {user}=useContext(AuthContext)

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
    
                  fetch(`https://assign-10-server-phi.vercel.app/movies/${_id}`,{
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
                        //   const remaining = movie.filter(mov=>mov._id!== _id)
                        //   setMovie(remaining)
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

                fetch('https://assign-10-server-phi.vercel.app/favoriteMovies', {
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
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={movie_poster}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold uppercase">{movie_title}</h1>
      <h3 className='text-gray-500 text-base'>Genre: {genre[0]}</h3>
    <h3 className='text-gray-500 text-base'>Duration: {duration} min</h3>
    <h3 className='text-gray-500 text-base'>Release: {release_year}</h3>
    <h3 className='text-gray-500 text-base'>Rating: {rating} </h3>
      <p></p>
      <p className="py-6">
       Summary: {summary}
      </p>
      <div className=' flex gap-2'>
      <Link to={`/updatemovie/${_id}`}><button className='btn btn-accent bg-amber-600' type="button">Edit</button></Link> 
            <button onClick={()=>handleDelete(_id)} className='btn btn-error' type="button">Delete</button>
            <button onClick={()=>handleAddtoFavorite(movieDetailsData)} className='btn btn-accent' type="button">Add to Favorite</button>
      </div>
    </div>
  </div>
</div>


        </div>
    );
};

export default MovieDetails;