import styled from 'styled-components'
import colors from '../bases/colors'

export const NutrientElement = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 16.15rem;
  background-color: #fbfbfb;
  border-radius: 0.35rem;
  @media (max-width: 1360px) {
    width: 12.5rem;
  }
  @media (max-width: 1200px) {
    margin-top: 2rem;
  }
`
export const Icon = styled.img`
  width: 3.75rem;
  height: auto;
  margin: 1.5rem;
`
export const Quantity = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: ${colors.textDark};
  padding-bottom: 0.2rem;
  padding-right: 1.5rem;
  @media (max-width: 1360px) {
    font-size: 1rem;
  }
`
export const Kind = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: ${colors.textLight};
  padding-right: 1.5rem;
`
