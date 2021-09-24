import React from 'react'
import Navigation from './Navigation.jsx'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          à remplr aussi
        </Link>
        <Navigation />
      </header>
    )
  }
}

export default Header