import React, { useState } from 'react'
import burger from '../assets/hamburger-menu-icon.svg'
import {
  BurgerContainer,
  ImgBurger,
  DivBurger,
  DivLinksBurger,
} from '../styles/components/navBurger'
import { StyledLink } from '../styles/components/header'

const NavBurger = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <BurgerContainer onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <DivBurger>
          <ImgBurger src={burger} alt="burger navigation" />
          <DivLinksBurger>
            <StyledLink exact to="/">
              Accueil
            </StyledLink>
            <StyledLink exact to="/user/:id">
              Profil
            </StyledLink>
            <StyledLink exact to="/reglages">
              Réglages
            </StyledLink>
            <StyledLink exact to="/communaute">
              Communauté
            </StyledLink>
          </DivLinksBurger>
        </DivBurger>
      ) : (
        <ImgBurger src={burger} alt="burger navigation" />
      )}
    </BurgerContainer>
  )
}

export default NavBurger
