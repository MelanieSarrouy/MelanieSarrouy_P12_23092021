import styled from 'styled-components'
import colors from '../bases/colors'
import { NavLink } from 'react-router-dom'


export const HeaderWrapper = styled.header`
  background-color: ${colors.backgroundDark};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.75rem;
  height: 5.7rem;
  @media (max-width: 1024px) {
    display: none;
  }
`
export const HeaderLogo = styled.img`
  height: 3.8rem;
  padding: 0 3rem 0 1.75rem;
  width: auto;
  @media (max-width: 1024px) {
    height: 2.8rem;
    padding: 0 1rem 0 1.75rem;
  }
`
export const StyledLink = styled(NavLink)`
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  padding-right: 2rem;
  &.${(props) => props.activeClassName} {
    color: ${colors.primary};
  }
`
export const BurgerContainer = styled.div`
  display: none;
  @media (max-width: 1024px) {
    height: 5.7rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`
export const ImgBurger = styled.img`
  height: 2.8rem;
  width: auto;
  padding: 0 1.75rem;
`
