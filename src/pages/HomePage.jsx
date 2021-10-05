import React from 'react'
import logo from '../assets/logo.svg'
import { Page } from '../styles/components/pages'
import { Welcome } from '../styles/components/welcome'
import {
  FirstName,
  Logo,
  LogoContainer,
  MainHomePage,
  ButtonsWrapper,
  Title,
  UserLink,
  Name,
} from '../styles/pages/homepage'

const HomePage = () => {
  return (
    <Page>
      <header>
        <Welcome>
          Bienvenue sur le site <FirstName>SportSee !</FirstName>
        </Welcome>
        <p>Le site de coaching sportif 🏃‍♂️</p>
        <LogoContainer>
          <Logo src={logo} alt="logo" />
        </LogoContainer>
      </header>
      <MainHomePage>
        <Title>Choisir un profil</Title>
        <ButtonsWrapper>
          <UserLink to="/user/12">
            <Name>Karl</Name>
          </UserLink>
          <UserLink to="/user/18">
            <Name>Cecilia</Name>
          </UserLink>
        </ButtonsWrapper>
      </MainHomePage>
    </Page>
  )
}

export default HomePage
