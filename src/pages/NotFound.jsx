import React from 'react'
import NotFound404 from '../assets/404.png'
import { Main404Page, Img404, LinkReturn } from '../styles/pages/notFound'


const NotFound = () => {
  return (
    <Main404Page className="notFound">
      <Img404 src={NotFound404} alt='404' />
      <h1 className="notFound__oups">
        Oups! La page que vous demandez n'existe pas encore
      </h1>
      <LinkReturn to="/" className="notFound__return">
        Retourner sur la page d'accueil
      </LinkReturn>
    </Main404Page>
  )
}

export default NotFound
