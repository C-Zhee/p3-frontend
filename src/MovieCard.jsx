import MovieInfo from "./MovieInfo"
import SearchBar from "./SearchBar"
import {useNavigate} from "react-router-dom"

const MovieCard = ({movies, search, addMovie, newMovie, delMovie}) => {
const navigate = useNavigate()
    
    const filteredShows = movies.filter((movie) => {
        return movie.name.toLowerCase().includes(search.toLowerCase())
    }) 


    return( 
    <div>
            <button className="button-4" type="button" onClick={() => navigate('/favorite')}>favorite</button>
            <button className="button-4" type="button" onClick={() => navigate('/movietrailer')}>movie trailer</button>

        <div className="grid">
            {/* replaced movies with filteredShows */}
            {filteredShows.map((movie) => {
                return (
                    <div onClick={() => { addMovie(movie) }}>
                    <MovieInfo movie={movie} />
                        <button className="button-4" type="button" onClick={() => { newMovie(movie) }}>New Movie</button>
                        <button className="button-4" type="button" onClick={() => { delMovie(movie) }}>x</button>
                    </div>
                    )
                })
            }      
        </div>
    </div>
    )
}

export default MovieCard