import styled from 'styled-components'

export const BurgerContainer = styled.div`
  display: none;
  @media (max-width: 800px) {
    height: 5.7rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`
export const ImgBurger = styled.img`
  height: 2rem;
  width: auto;
  padding: 0 1.75rem;
`

export const DivBurger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`
export const DivLinksBurger = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 5.7rem;
  right: 0;
  border-radius: 0 0 0 .35rem;
  z-index: 3;
  & > a {
    background-color: rgba(0, 0, 0, 0.7);
    width: 8rem;
    padding: 1.75rem;
    text-align: end;
    &:hover {
      background-color: black;
      border-radius: .35rem 0 0 .35rem;
    }
  }
`
