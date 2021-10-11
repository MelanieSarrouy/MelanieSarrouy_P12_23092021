import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const ActivityLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 0.4rem;
  width: 4rem;
  height: 4rem;
  margin: 1.3rem 0;
  @media (max-width: 1024px) {
    width: 2.5rem;
    height: 2.5rem;
    margin: 1rem;
  }
`
export const Icon = styled.img`
  width: auto;
  padding: 0.5rem;
  @media (max-width: 1024px) {
    width: 2.5rem;
  }
`
