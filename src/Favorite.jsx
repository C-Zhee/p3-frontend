const Favorite = ({favorite, deleteMovie}) => {
    return (
        <div >
            {
                favorite.map((movie) => {
                    return (
                        <div onClick={() => { deleteMovie(movie) }}>
                            <img src={movie.image} />
                            <p>{movie.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorite;