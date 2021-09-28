import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <header>
        <h1> Bienvenue sur le site SportSee !</h1>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <p>Accéder au profil de</p>
        <div>
          <button>
            <Link to="/user/12">Karl</Link>
          </button>
          <button>
            <Link to="/user/18">Cecilia</Link>
          </button>
        </div>
      </main>
    </div>
  )
}

export default HomePage
