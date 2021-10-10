import React from 'react'
import NotFound404 from '../assets/404.png'
import { Page } from '../styles/components/pages'
import { Main404Page, Img404, LinkReturn, Title404 } from '../styles/pages/notFound'

const NotFound = () => {
  return (
    <Page>
      <Main404Page className="notFound">
        <Img404 src={NotFound404} alt="404" />
        <Title404 className="notFound__oups">
          Oups! La page que vous demandez n'existe pas encore
        </Title404>
        <LinkReturn to="/" className="notFound__return">
          Retourner sur la page d'accueil
        </LinkReturn>
      </Main404Page>
    </Page>
  )
}

export default NotFound
