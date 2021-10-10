import styled from 'styled-components'
import colors from '../bases/colors'


export const Err = styled.div`
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 2rem;
  color: ${colors.primary}
`
export const FirstName = styled.span`
  color: ${colors.primary};
`
export const Charts = styled.section`
  display: grid;
  grid-template-columns: 75% 25%;
  height: 600px;
  column-gap: 2rem;
  padding-top: 5rem;
  @media (max-width: 1360px) {
    column-gap: 1rem;
  }

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
  @media (max-width: 1024px) {
    padding-top: 2rem;
  }
`
export const ChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 600px;
  @media (max-width: 1200px) {
    height: auto;
  }
`

export const LittleCharts = styled.div`
  display: flex;
  column-gap: 1rem;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`
