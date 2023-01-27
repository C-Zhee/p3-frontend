import { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom' // also for react router. Making different URLs. It's Routes for reactrouterv6, Switch was v5
import Homepage from './/Homepage'
import Signup from './Signup'
import MovieCard from "./MovieCard"
import Favorite from "./Favorite"
import "./App.css";
import MovieTrailer from "./MovieTrailer"


const App = () => {
  const [movies, setMovies] = useState ([])
  const [favorite, setFavorite] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const request = async () => {
      let req = await fetch("http://localhost:9292/movies")
      let res = await req.json()
      setMovies(res)
    }
    request()
  }, [])


  // function for create account to go to signup page
  const signupClick = () => {
    console.log('working')
  }
  const handleLoginSubmit = (e) => {
    e.preventDefault()
    navigate('/moviecard')
  }
  // function to submit signup form to sign up
  const handleSignupSubmit = (e) => {
    e.preventDefault()
    navigate('/moviecard')
  }

  const addMovie = (movie) => {
    if (favorite.includes(movie)) return;
    setFavorite([...favorite, movie])
  }

  const deleteMovie = (movie) => {
    setFavorite(favorite.filter(x => x !== movie))
  }

  const newMovie = async (movie) => {
    let req = await fetch("http://localhost:9292/movies", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'name': "Blaziken", 'image': 'https://i.pinimg.com/236x/71/4c/94/714c942405dd3f487b50e86a30a9e1fe--passion-pictures.jpg' })
    })
    setMovies(movies, movie)
  }

  const delMovie = async (movie) => {
    let req = await fetch(`http://localhost:9292/movies${movie.id}`, {
      method: "DELETE",
    })
    setMovies(movie.filter(x => x.id !== movie.id))
  }

  const router = createBrowserRouter([
    { path: '/',
    element: < Homepage signupClick={ signupClick } handleLoginSubmit={ handleLoginSubmit } />
  },
  { path: '/signup',
   element: < Signup handleSignupSubmit = { handleSignupSubmit } />
  }, 
  {path:'/favorite',
   element: < Favorite favorite = { favorite } deleteMovie={deleteMovie}/>
  },
  {
  path: '/moviecard',
    element: < MovieCard movies={movies} search={search} setSearch={setSearch} addMovie={addMovie} newMovie={newMovie} delMovie={delMovie}/>
 },
 {
  path: "/movietrailer",
  element: <MovieTrailer />
 }
  ])

 return( 
<div>
    <RouterProvider router={router}/>
</div>
 )
}
export default App;
