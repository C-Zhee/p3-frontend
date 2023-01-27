import SearchBar from "./SearchBar"
import MovieCard from './MovieCard'
function Display ({movies, search, setSearch}) {
    return (
        <div>
            <><SearchBar search={search} setSearch={setSearch}/></>
            <><MovieCard movies={movies}/></>
        </div>
        
    )
}

export default Display