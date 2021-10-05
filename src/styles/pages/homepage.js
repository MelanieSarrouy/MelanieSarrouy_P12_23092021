import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../bases/colors'

export const FirstName = styled.span`
  color: ${colors.primary};
`
export const Logo = styled.img`
  width: 12rem;
  @media (max-width: 1024px) {
    width: 8rem;
  }
`
export const LogoContainer = styled.div`
  padding: 5rem 0rem;
  @media (max-width: 1024px) {
    padding: 2rem 0;
  }
`
export const MainHomePage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.textDark};
  padding: 3rem;
  border-radius: 0.35rem;
`
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const Title = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.5rem;
  text-align: center;
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`
export const UserLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  border: none;
  border-radius: 0.35rem;
  width: 16rem;
  height: 16rem;
  margin: 5rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 1200px) {
    width: 100%;
    height: 6.5rem;
    margin: 2rem 0rem 0rem;
  }
  &:hover {
    background-color: rgba(255, 1, 1, 0.7);
    box-shadow: 6px 6px 2px rgba(0, 0, 0, 0.25);
  }
`
export const Name = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  color: white;
`
