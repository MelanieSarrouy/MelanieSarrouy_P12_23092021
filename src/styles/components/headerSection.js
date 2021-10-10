import styled from 'styled-components'
import colors from '../bases/colors'

export const Welcome = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  line-height: 3.5rem;
  padding-bottom: 2.8rem;
  @media (max-width: 1024px) {
    font-size: 2rem;
    line-height: 2.5rem;
    padding-bottom: 2rem;
  }
`
export const FirstName = styled.span`
  color: ${colors.primary};
`
