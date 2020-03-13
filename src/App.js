import React from 'react'
import './App.css'
import Logo from './logo.png'
import MovieList from './API'

function App() {
  return (
    <div className="App" style={{background:'WhiteSmoke'}}>
      <img src={Logo}/>
      <MovieList/>
    </div>
  )
}

export default App
