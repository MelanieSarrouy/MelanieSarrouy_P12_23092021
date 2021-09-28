import React from 'react'
import styled from 'styled-components'
import colors from '../utils/style/colors'
import yoga from '../assets/yoga.svg'
import swim from '../assets/swim.svg'
import bike from '../assets/bike.svg'
import weight_training from '../assets/weight_training.svg'

import { NavLink } from 'react-router-dom'

const AsideWrapper = styled.aside`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.backgroundDark};
  min-height: 91vh;
  position: relative;
`
const NavContainer = styled.nav`
  padding-bottom: 2rem;
`
const Copyright = styled.p`
  display: block;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  color: white;
  padding: 3.7rem 2.8rem;
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
  text-align: center;
`
const ActivityLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 0.4rem;
  width: 4rem;
  height: 4rem;
  margin: 1.3rem 0;
`
const Icon = styled.img`
  height: 2rem;
  width: auto;
`

const Aside = () => {
  return (
    <AsideWrapper>
      <Copyright>Copyright, SportSee 2020</Copyright>
      <NavContainer>
        <ActivityLink exact to="/profil/yoga">
          <Icon src={yoga} alt="icone yoga" />
        </ActivityLink>
        <ActivityLink exact to="/profil/swim">
          <Icon src={swim} alt="icone yoga" />
        </ActivityLink>
        <ActivityLink exact to="/profil/bike">
          <Icon src={bike} alt="icone yoga" />
        </ActivityLink>
        <ActivityLink exact to="/profil/weight-training">
          <Icon src={weight_training} alt="icone weight training" />
        </ActivityLink>
      </NavContainer>
    </AsideWrapper>
  )
}

export default Aside
