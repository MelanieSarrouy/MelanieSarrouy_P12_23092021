import styled from 'styled-components'
import colors from '../bases/colors.js'

export const ScoreChartContainer = styled.article`
  background-color: 'white';
  border-radius: 0.35rem;
  width: 100%;
  height: 263px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 1200px) {
    margin-top: 2rem;
  }
`
export const Title = styled.h2`
  color: '#20253A';
  font-size: 0.95rem;
  font-weight: 500;
  max-width: 9.5rem;
  line-height: 1.5rem;
  padding: 1.5rem 0 1rem 1.5rem;
  align-self: flex-start;
  position: absolute;
  left: 0;
`
export const Result = styled.p`
  text-align: center;
  line-height: 1.6rem;
  color: ${colors.textLight};
  font-size: 1rem;
  font-weight: 500;
  position: absolute;
`
export const BigResult = styled.span`
  color: ${colors.textDark};
  font-size: 1.6rem;
  font-weight: 700;
`
