import styled from 'styled-components'

export const FeedsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 600px;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    height: auto;
  }
`
