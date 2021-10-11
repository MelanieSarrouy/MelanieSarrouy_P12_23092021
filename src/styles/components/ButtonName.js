import styled from 'styled-components'
import colors from '../bases/colors'
import { Link } from 'react-router-dom'

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
