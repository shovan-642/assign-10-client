import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Rating } from 'react-simple-star-rating';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';

const UpdateMovie = () => {



  

    const movie = useLoaderData()
      console.log(movie)

     const {_id, movie_poster, movie_title, genre, duration, release_year, rating, summary} = movie



     
    const [ratings, setRating] = useState(rating);
  
    const handleRating = (rate) => {
      setRating(rate);
        // other logic
    };
  
    // Optinal callback functions
    const onPointerEnter = () => console.log();
    const onPointerLeave = () => console.log();
    const onPointerMove = (value, index) => console.log(value, index);




    const handleUpdateMovie = e =>{
        e.preventDefault()
        const form = e.target
const movie_poster = form.movie_poster.value;
    const urlCheck =
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

    if (!urlCheck.test(movie_poster)) {
      toast.error("Please enter valid URL address")
      return;
    }

    const movie_title = form.movie_title.value;
    if (movie_title.length < 2) {
      toast.error("Please insert title atleast 2 character")
      return
    }
    const genre = [form.genre.value];
    console.log(genre);
    const duration = form.duration.value;
    if (duration <= 60) {
      toast.error("Please insert duration value greater than 60 (min)")

      return;
    }
    const release_year = form.release_year.value;
    const rating = ratings;
    if(rating<=0){
      toast.error("Please give rating star of this movie")

      return

    }
    const summary = form.summary.value;
    if(summary.length<10){
      toast.error("Please write summary atleast 10 character")
      return
        
    }
    
        const updatedMovieData = {movie_poster, movie_title, genre, duration, release_year, rating, summary}

           fetch(`http://localhost:5000/movies/${_id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedMovieData)
        
            })
            .then (res=>res.json())
            .then (data=>{
                console.log(data)
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Movie Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })


    }

    
    return (
        <div>
            <form onSubmit={handleUpdateMovie}>
        <div>
                  <label className="">Movie Poster</label>
                  <input
                  defaultValue={movie_poster}
                    name="movie_poster"
                    type="text"
                    placeholder="Movie image URL"
                    className="input input-neutral"
                    required
                  />
                </div>
                <div>
                  <label className="">Movie Title</label>
                  <input
                  defaultValue={movie_title}
                    name="movie_title"
                    type="text"
                    placeholder="Movie name"
                    className="input input-neutral"
                    required
                  />
                </div>
                <div>
                  <label className="">Genre</label>
                  <select
                    defaultValue={genre}
                    name="genre"
                    className="select"
                    required
                  >
                    <option disabled={true}>Pick a Genre</option>
                    <option>Animation</option>
                    <option>Action</option>
                    <option>Science Fiction</option>
                    <option>Fantasy</option>
                    <option>Superhero</option>
                    <option>Horror</option>
                    <option>Comedy</option>
                  </select>
                </div>
                <div>
                  <label className="">Duration</label>
                  <input
                    defaultValue={duration}
                    name="duration"
                    type="number"
                    placeholder="Movie length"
                    className="input input-neutral"
                    required
                  />
                </div>
                <div>
                  <label className="">Release Year</label>
                  <select
                    defaultValue={release_year}
                    name="release_year"
                    className="select"
                    required
                  >
                    <option disabled={true}>Pick a Year</option>
                    <option>2025</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                  </select>
                </div>
                <div>
                  <label className="">Rating</label>
                  <div className="App">
                    <div className="rating-container">
                      <div className="flex gap-5 items-center">
                        <div className="App">
                          <div className="rating-container">
                            <Rating
                              onClick={handleRating}
                              initialValue={ratings}
                              onPointerEnter={onPointerEnter}
                              onPointerLeave={onPointerLeave}
                              onPointerMove={onPointerMove}
                              /* Available Props */
                            />
                            <p>{ratings}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="">Summary</label>
                  <textarea
                  defaultValue={summary}
                    name="summary"
                    type="text"
                    placeholder="Movie Summary"
                    className="input input-neutral"
                    required
                  ></textarea>
                  
                </div>
        <button className="btn btn-ghost">Update Movie</button>
      </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateMovie;