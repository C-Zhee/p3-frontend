import MovieInfo from "./MovieInfo"

const MovieCard = ({movies, search}) => {

    const filteredShows = movies.filter((movie) => {
        return movie.name.toLowerCase().includes(search.toLowerCase())
    }) 


    return( 
        <div className="grid">
            {/* replaced movies with filteredShows */}
            {filteredShows.map((movie) => {
                return (
                    <div onClick={() => { addMember(unit) }}>
                    <MovieInfo movie={movie} />
                    </div>
                    )
                })
            }      
        </div>
    )
}

export default MovieCard