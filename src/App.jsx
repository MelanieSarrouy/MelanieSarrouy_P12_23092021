// IMPORTS // ______________________________________________________________

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// components imports
import Aside from './components/Aside'
import Header from './components/Header'
import NotFound from './pages/NotFound'
import User from './pages/User'
import HomePage from './pages/HomePage'
// styles imports
import { GlobalStyle } from './styles/bases/bases'
import { MainWrapper } from './styles/components/app'

// JSX // _________________________________________________________________

/**
 * App's component to manage various routes 
 * and display corresponding pages components  
 * @returns {JSX}
 */

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
            <Route path="/user/:id?" component={User} />
            <Route path="/profil" component={NotFound} />
            <Route path="/reglages" component={NotFound} />
            <Route path="/communaute" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </section>
      </MainWrapper>
    </BrowserRouter>
  )
}

// EXPORT // ______________________________________________________________

export default App
