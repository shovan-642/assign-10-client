
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
        <div>
            
            <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
        className='h-80 w-60'
      src={movie_poster}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{movie_title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
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