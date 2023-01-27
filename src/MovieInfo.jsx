
const MovieInfo = ({ movie }) => {
    return (
        <div>
            <h2>{movie.name}</h2>
            <img src={movie.image} width="300px" height="450px"/>
            <p>Rating: {movie.rating}</p>
            <p>{movie.synopsis}</p>
            <p># of seaons: {movie.seasons}</p>
            <p># of total episodes :{movie.episodes}</p>
        </div>
    )
}

export default MovieInfo;