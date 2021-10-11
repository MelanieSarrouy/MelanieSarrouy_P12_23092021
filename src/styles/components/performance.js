import styled from 'styled-components'
import colors from '../bases/colors'

export const RadarContainer = styled.article`
  background-color: ${colors.secondary};
  border-radius: 0.35rem;
  width: 100%;
  height: 263px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    margin-top: 2rem;
  }
`
