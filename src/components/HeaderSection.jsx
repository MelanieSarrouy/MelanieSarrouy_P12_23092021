import React from 'react'
import { Welcome, FirstName } from '../styles/components/headerSection'

const HeaderSection = ({ title, firstname, sentence }) => {
  return (
    <header>
      <Welcome>
        {title}
        <FirstName> {firstname}</FirstName>
      </Welcome>
      <p>{sentence}</p>
    </header>
  )
}

export default HeaderSection
