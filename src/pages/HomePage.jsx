import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/style/colors'

const HomePagecontainer = styled.div`
  padding: 3.4rem 6.8rem;
`
const Welcome = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  line-height: 1.5rem;
  padding-bottom: 2.8rem;
`
const FirstName = styled.span`
  color: ${colors.primary};
`
const Logo = styled.img`
  width: 12rem;
`
const LogoContainer = styled.div`
  padding: 5rem 0rem;
`
const MainHomePage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.textDark};
  padding: 3rem;
  border-radius: 0.35rem;

`
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`
const ChoiceTitle = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.5rem;
`
const UserLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  border: none;
  border-radius: 0.35rem;
  width: 16rem;
  height: 16.5rem;
  margin: 5rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: rgba(255, 1, 1, 0.7);
    box-shadow: 6px 6px 2px rgba(0, 0, 0, 0.25);
  }
`
const Name = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: white;
`
const HomePage = () => {
  return (
    <HomePagecontainer>
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
        <ChoiceTitle>Choisir un profil</ChoiceTitle>
        <ButtonsWrapper>
          <UserLink to="/user/12">
            <Name>Karl</Name>
          </UserLink>
          <ChoiceTitle>ou</ChoiceTitle>
          <UserLink to="/user/18">
            <Name>Cecilia</Name>
          </UserLink>
        </ButtonsWrapper>
      </MainHomePage>
    </HomePagecontainer>
  )
}

export default HomePage
