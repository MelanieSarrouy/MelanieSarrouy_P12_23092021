import styled from 'styled-components'
import colors from '../bases/colors'
import { keyframes } from 'styled-components'

const bounce = keyframes`
  0% {
    top: 2rem;
    height: 5px;
    border-radius: 60px 60px 20px 20px;
    transform: scaleX(2);
  }
  35% {
    height: 1rem;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0;
  }
`
export const DivContainerWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`

export const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const Text = styled.div`
  color: ${colors.primary};
  display: inline-block;
  margin-left: 1rem;
`
export const BounceBall = styled.div`
  position: relative;
  display: inline-block;
  height: 37px;
  width: 1rem;
  &:before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${colors.primary};
    transform-origin: 50%;
    animation: ${bounce} 500ms alternate infinite ease;
  }
`
