import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import {
  HeaderWrapper,
  NavContainer,
  HeaderLogo,
  StyledLink
} from '../styles/components/header'
import NavBurger from './NavBurger'


/**
 * Component Header with main navigation
 * @returns {JSX}
 */

const Header = () => {

  return (
    <HeaderWrapper>
      <Link to="/">
        <HeaderLogo src={logo} alt="logo" />
      </Link>
      <NavContainer>
        <StyledLink exact to="/" activeClassName="something">
          Accueil
        </StyledLink>
        <StyledLink exact to="/user/:id" activeClassName="something">
          Profil
        </StyledLink>
        <StyledLink exact to="/reglages" activeClassName="something">
          Réglages
        </StyledLink>
        <StyledLink exact to="/communaute" activeClassName="something">
          Communauté
        </StyledLink>
      </NavContainer>
      <NavBurger />
    </HeaderWrapper>
  )
}

export default Header
