// IMPORTS // ______________________________________________________________

import React from 'react'
// components imports
import HeaderSection from '../components/HeaderSection'
import ButtonName from '../components/ButtonName'
// styles imports
import { Page } from '../styles/bases/pages'
import {
  Logo,
  MainHomePage,
  ButtonsWrapper,
  Title
} from '../styles/pages/homepage'
// datas imports
import logo from '../assets/logo.svg'
import { users } from '../datas/users'

// JSX // _________________________________________________________________

/**
 * HomePage's component to display homepage
 * @name HomePage
 * @returns {JSX}
 */

const HomePage = () => {
  const title = 'Bienvenue sur le site'
  const firstname = 'SportSee !'
  const sentence = 'Le site de coaching sportif 🏃‍♂️'
  return (
    <Page>
      <HeaderSection title={title} firstname={firstname} sentence={sentence} />
      <Logo src={logo} alt="logo" />
      <MainHomePage>
        <Title>Choisir un profil</Title>
        <ButtonsWrapper>
          {users.map((user, index) => (
            <ButtonName key={index} linkId={user.link} firstname={user.name} />
          ))}
        </ButtonsWrapper>
      </MainHomePage>
    </Page>
  )
}

// EXPORT // ______________________________________________________________

export default HomePage
