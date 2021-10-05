import styled from 'styled-components'
import colors from '../bases/colors'

export const ActivityContainer = styled.article`
  background-color: #fbfbfb;
  padding: 2rem;
  border-radius: 0.35rem;
`
export const Legend = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
`
export const Keys = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const Title = styled.h2`
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: #20253a;
`
export const Element = styled.div`
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: ${colors.textLight};
  padding-left: 1.5rem;
  display: flex;
  justify-content: flex-end;
`
export const TooltipStyle = styled.div`
  background-color: ${colors.primary};
  color: white;
  font-size: 0.5rem;
  font-weight: 500;
  line-height: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  height: 4rem;
`
