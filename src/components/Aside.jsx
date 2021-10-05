import React from 'react'
import {
  AsideWrapper,
  NavContainer,
  UlContainer,
  Copyright
} from '../styles/components/aside'
import Button from './Button'
import { icons } from '../datas/icons'

const Aside = () => {
  return (
    <AsideWrapper>
      <Copyright>Copyright, SportSee 2020</Copyright>
      <NavContainer>
        <UlContainer>
          {icons.map((icon, index) => (
            <li key={index}>
              <Button name={icon.name} cover={icon.cover} />
            </li>
          ))}
        </UlContainer>
      </NavContainer>
    </AsideWrapper>
  )
}

export default Aside
