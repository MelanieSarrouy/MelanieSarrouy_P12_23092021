import styled from 'styled-components'

export const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 7.3rem auto;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
  }
`
