import styled from 'styled-components'
import colors from '../bases/colors'

export const Logo = styled.img`
  width: 12rem;
  padding: 5rem 0rem;

  @media (max-width: 1024px) {
    width: 8rem;
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
