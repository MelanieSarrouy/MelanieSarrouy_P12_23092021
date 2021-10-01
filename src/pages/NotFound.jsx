import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NotFound404 from '../assets/404.png'
import colors from '../utils/style/colors'

const Main404Page = styled.main`
  padding: 3.4rem 6.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Img404 = styled.img`
  padding: 6rem 0rem;
  width: 70%;
`
const LinkReturn = styled(Link)`
  margin-top: 6rem;
  color: ${colors.primary};
  font-weight: 500;
  &:hover {
    color: rgba(255, 1, 1, 0.7);
  }

`
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
