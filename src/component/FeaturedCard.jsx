import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const FeaturedCard = ({singleMovie, movie, setMovie}) => {

    const {_id, movie_poster, movie_title, genre, duration, release_year, rating, summary} = singleMovie

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

    return (
        <div>
            <img src={movie_poster} alt="" />
            <p>{movie_title}</p>
            <div>
                <button className='btn btn-accent' type="button">Details</button>
               <Link to={`updatemovie/${_id}`}><button className='btn btn-accent' type="button">Edit</button></Link> 
                <button onClick={()=>handleDelete(_id)} className='btn btn-accent' type="button">Delete</button>
            </div>
        </div>
    );
};

export default FeaturedCard;