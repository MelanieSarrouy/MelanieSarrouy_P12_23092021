import styled from 'styled-components'
import colors from './colors'


export const  FeedsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 600px;
`
export const Feed = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 16.15rem;
  background-color: #fbfbfb;
  border-radius: 0.35rem;
  ${'' /* margin-bottom: 2.45rem; */}
`
export const Icon = styled.img`
  width: 3.75rem;
  height: auto;
  margin: 1.5rem;
`
export const FeedContainerText = styled.div`
  ${'' /* padding: 1.5rem; */}
`

export const Quantity = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: ${colors.textDark};
  padding-bottom: 0.2rem;
`
export const Kind = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: ${colors.textLight};
`
