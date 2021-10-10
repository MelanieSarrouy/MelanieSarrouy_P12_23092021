import React from 'react'
import logo from '../assets/logo.svg'
import { Page } from '../styles/components/pages'
import {
  Logo,
  MainHomePage,
  ButtonsWrapper,
  Title
} from '../styles/pages/homepage'
import HeaderSection from '../components/HeaderSection'
import ButtonName from '../components/ButtonName'
import { users } from '../datas/users'

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

export default HomePage
