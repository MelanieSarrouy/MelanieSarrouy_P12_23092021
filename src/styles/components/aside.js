import styled from 'styled-components'
import colors from '../bases/colors'

export const AsideWrapper = styled.aside`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  background-color: ${colors.backgroundDark};
  min-height: 100vh;
  position: relative;
  @media (max-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 6rem;
    padding: 0rem 5%;
  }
`
export const NavContainer = styled.nav`
  margin-bottom: 6rem;
  position: absolute;
  top: 16rem;
  @media (max-width: 1024px) {
    margin-bottom: 3rem;
    position: relative;
    top: 0rem;
  }
`
export const UlContainer = styled.ul`
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 2rem;
  }
`
export const Copyright = styled.p`
  display: block;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  color: white;
  padding: 3.7rem 2.8rem;
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
  text-align: center;
  position: absolute;
  bottom: 4rem;
  @media (max-width: 1024px) {
    writing-mode: horizontal-tb;
    transform: rotate(0deg);
    bottom: 0rem;
    padding: 1rem;

  }
`
