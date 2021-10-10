import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../bases/colors'

export const Main404Page = styled.main`
  ${'' /* padding: 3.4rem 6.8rem; */}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Img404 = styled.img`
  padding: 6rem 0rem;
  width: 70%;
`
export const Title404 = styled.h1`
  text-align: center;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`
export const LinkReturn = styled(Link)`
  margin-top: 6rem;
  color: ${colors.primary};
  font-weight: 500;
  &:hover {
    color: rgba(255, 1, 1, 0.7);
  }
`
