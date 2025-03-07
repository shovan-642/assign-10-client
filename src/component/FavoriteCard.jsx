
import Swal from 'sweetalert2';

const FavoriteCard = ({mov}) => {


    
    

    const {_id, movie_poster, movie_title, genre, duration, release_year, rating} = mov

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