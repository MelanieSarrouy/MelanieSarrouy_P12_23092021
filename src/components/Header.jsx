// IMPORTS // ______________________________________________________________

import React from 'react'
import { Link } from 'react-router-dom'
// components imports
import NavBurger from './NavBurger'
// styles imports
import {
  HeaderWrapper,
  NavContainer,
  HeaderLogo,
  StyledLink
} from '../styles/components/header'
// datas imports
import logo from '../assets/logo.svg'

// JSX // _________________________________________________________________

/**
 * Header's componant with main navigation
 * @name Header
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
        <StyledLink exact to="/profil" activeClassName="something">
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

// EXPORT // ______________________________________________________________

export default Header
