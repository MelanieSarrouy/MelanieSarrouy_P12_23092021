import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import styled from 'styled-components'
import colors from '../utils/style/colors'

const HeaderWrapper = styled.header`
  background-color: ${colors.backgroundDark};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.75rem;
  height: 5.7rem;
`
const HeaderLogo = styled.img`
  height: 3.8rem;
`
const StyledLink = styled(NavLink)`
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  padding-right: 2rem;
  &.${(props) => props.activeClassName} {
    color: ${colors.primary};
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <NavContainer>
        <StyledLink exact to="/" activeClassName="something">
          <HeaderLogo src={logo} alt="logo" />
        </StyledLink>
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
    </HeaderWrapper>
  )
}

export default Header
