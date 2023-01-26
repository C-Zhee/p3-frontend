
const MovieInfo = ({ movie }) => {
    return (
        <div>
            <h2>{movie.name}</h2>
            <img src={movie.image} width="300px" height="450px"/>
            <p>{movie.rating}</p>
            <p>{movie.synopsis}</p>
            <p>{movie.seasons}</p>
            <p>{movie.episodes}</p>
        </div>
    )
}

export default MovieInfo;