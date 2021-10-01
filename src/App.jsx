import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Aside from './components/Aside'
import Header from './components/Header'
import NotFound from './pages/NotFound'
import Profil from './pages/Profil'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import HomePage from './pages/HomePage'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-size: 16px;
    margin: auto;
  }
  img {
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  .sr-only {
    position:absolute;
    width:1px;
    height:1px;
    padding:0;
    margin:-1px;
    overflow:hidden;
    clip:rect(0,0,0,0);
    white-space:nowrap;
    border:0
  }
  button {
    cursor: pointer;
  }
  input:placeholder-shown {
    text-overflow: ellipsis;
  }
  input:focus-visible {
    outline: none;
  }
  button:focus-visible {
    outline: none;
  }
`
const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 7.3rem auto;
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
