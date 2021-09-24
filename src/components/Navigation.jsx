import React from 'react'
import { NavLink } from 'react-router-dom'

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <NavLink exact to="/accueil" activeClassName="nav-active">
          Accueil
        </NavLink>
        <NavLink exact to="/" activeClassName="nav-active">
          Profil
        </NavLink>
        <NavLink exact to="/reglages" activeClassName="nav-active">
          Réglages
        </NavLink>
        <NavLink exact to="/communaute" activeClassName="nav-active">
          Communauté
        </NavLink>

      </nav>
    )
  }
}

export default Navigation
