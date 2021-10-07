import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import burger from '../assets/hamburger-menu-icon.svg'
import {
  DivBurger,
  DivLinksBurger,
  HeaderWrapper,
  NavContainer,
  HeaderLogo,
  StyledLink,
  BurgerContainer,
  ImgBurger,
} from '../styles/components/header'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

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
      <BurgerContainer onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <DivBurger>
            <ImgBurger src={burger} alt="burger navigation" />
            <DivLinksBurger>
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
            </DivLinksBurger>
          </DivBurger>
        ) : (
          <ImgBurger src={burger} alt="burger navigation" />
        )}
      </BurgerContainer>
    </HeaderWrapper>
  )
}

export default Header
