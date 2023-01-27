import MovieInfo from "./MovieInfo"
import SearchBar from "./SearchBar"

const MovieCard = ({movies, search, addMovie}) => {

    const filteredShows = movies.filter((movie) => {
        return movie.name.toLowerCase().includes(search.toLowerCase())
    }) 


    return( 
        <div className="grid">
            {/* replaced movies with filteredShows */}
            {filteredShows.map((movie) => {
                return (
                    <div onClick={() => { addMovie(unit) }}>
                    <MovieInfo movie={movie} />
                    </div>
                    )
                })
            }      
        </div>
    )
}

export default MovieCard