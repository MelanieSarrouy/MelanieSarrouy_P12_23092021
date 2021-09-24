import React from 'react'
import { Link } from 'react-router-dom'

class NotFound extends React.Component {
  render() {
    return (
      <main className="notFound">
        <h1 className="notFound__404">404</h1>
        <h2 className="notFound__oups">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <Link to="/" className="notFound__return">
          Retourner sur la page d'accueil
        </Link>
      </main>
    )
  }
}

export default NotFound