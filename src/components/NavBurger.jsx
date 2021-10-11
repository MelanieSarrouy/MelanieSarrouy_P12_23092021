// IMPORTS // ______________________________________________________________

import React, { useState } from 'react'
// components imports
import { StyledLink } from '../styles/components/header'
// styles imports
import {
  BurgerContainer,
  ImgBurger,
  DivBurger,
  DivLinksBurger,
} from '../styles/components/navBurger'
// datas imports
import burger from '../assets/hamburger-menu-icon.svg'

// JSX // _________________________________________________________________

/**
 * NavBurger's component to display responsive navigation
 * @name NavBurger
 * @returns {JSX}
 */

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

// EXPORT // ______________________________________________________________

export default NavBurger
