import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Aside from './components/Aside'
import Header from './components/Header'
import NotFound from './pages/NotFound'
import Profil from './pages/Profil'

const App = () => {
  return (
    <BrowserRouter>
      <div className="home">
        <div className="bloc_page">
          <Header />
          <Switch>
            <Route exact path="/" component={Profil} />
            <Route exact path="/accueil" component={NotFound} />
            <Route exact path="/reglages" component={NotFound} />
            <Route exact path="/communaute" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Aside />
      </div>
    </BrowserRouter>
  )
}
export default App
