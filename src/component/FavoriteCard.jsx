
import Swal from 'sweetalert2';

const FavoriteCard = ({mov, movie, setMovie}) => {


    
    

    const {_id, movie_poster, movie_title, genre, duration, release_year, rating} = mov


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
        
                      fetch(`https://assign-10-server-phi.vercel.app/favoriteMovies/${_id}`,{
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
        <div className='w-11/12 mx-auto'>
            
            <div>
            <div className="card bg-base-100 shadow-sm">
            <figure>
    <img
    className='h-100 w-90 rounded-2xl py-3'
      src={movie_poster}
      alt="movie poster" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl uppercase">{movie_title}</h2>
    <h3 className='text-gray-500 text-base'>Genre: {genre[0]}</h3>
    <h3 className='text-gray-500 text-base'>Duration: {duration} min</h3>
    <h3 className='text-gray-500 text-base'>Release: {release_year}</h3>
    <h3 className='text-gray-500 text-base'>Rating: {rating} </h3>
    <div className="card-actions justify-end">
    <button onClick={()=>handleDelete(_id)} className='btn btn-accent' type="button">Delete</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default FavoriteCard;