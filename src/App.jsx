import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Aside from './components/Aside'
import Header from './components/Header'
import NotFound from './pages/NotFound'
import Profil from './pages/Profil'
import styled from 'styled-components'
import HomePage from './pages/HomePage'
import { GlobalStyle } from './styles/bases/bases'

const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 7.3rem auto;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
  }

`
const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <MainWrapper>
        <Aside />
        <section>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/user/:id?" component={Profil} />
            <Route path="/reglages" component={NotFound} />
            <Route path="/communaute" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </section>
      </MainWrapper>
    </BrowserRouter>
  )
}
export default App
