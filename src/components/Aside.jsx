// IMPORTS // ______________________________________________________________

import React from 'react'
// components imports
import Button from './Button'
// styles imports
import {
  AsideWrapper,
  NavContainer,
  UlContainer,
  Copyright
} from '../styles/components/aside'
// datas imports
import { icons } from '../datas/icons'

// JSX // _________________________________________________________________

/**
 * Aside's component to display secondary navigation
 * @name Aside
 * @returns {JSX}
 */

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

// EXPORT // ______________________________________________________________

export default Aside
