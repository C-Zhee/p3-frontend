import {useNavigate} from 'react-router-dom'
import App from './App'

const Favorite = ({favorite, deleteMovie}) => {
    const navigate = useNavigate()
    return (
        <div >
            <button className="button-4"  onClick={() => navigate('/moviecard')}>moviecard</button>
            {
                favorite.map((movie) => {
                    return (
                        <div onClick={() => { deleteMovie(movie) }}>
                            <img width="250px" height="300px" grid-template-columns = "auto auto auto auto auto auto" src={movie.image} />
                            <p>{movie.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorite;