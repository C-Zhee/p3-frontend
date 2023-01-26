import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom' // also for react router. Making different URLs. It's Routes for reactrouterv6, Switch was v5
import Homepage from './/Homepage'
import Signup from './Signup'
import MovieCard from "./MovieCard"
import SearchBar from './SearchBar'
import Favorite from "./Favorite"

import "./App.css";


const App = () => {
  const [movies, setMovies] = useState ([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
    const request = async () => {
      let req = await fetch("http://localhost:3000/movies")
      let res = await req.json()
      setMovies(res)
    }
    request()
    },[])

     const navigate = useNavigate()

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
  // const addMovie = (movie) => {
  //   if (party.includes(movie)) return;
  //   setFavorite([...party, movie])
  // }

  // const deleteMovie = (movie) => {
  //   setFavorite(party.filter(x => x !== movie))
  // }

 return( 
<div>
  <Routes>
    <Route exact path='/' element={<Homepage signupClick={signupClick} handleLoginSubmit={handleLoginSubmit} />} />
    <Route exact path='/signup' element={<Signup handleSignupSubmit={handleSignupSubmit} />} />
    <Route exact path='/searchbar' element={<SearchBar search={search} setSearch={setSearch} />} />
    <Route exact path='/favorite' element={<Favorite />} />
    <Route exact path='/moviecard' element={<MovieCard movies={movies} search={search} />} />
  </Routes>
</div>
 )
}
export default App;
