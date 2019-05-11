import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Landing from './components/Landing'
import ArtPage from './components/ArtPage'
import WebDesignPage from './components/WebDesignPage'
import NotFound from './components/NotFound'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/art' component={ArtPage} />
      <Route exact path='/web' component={WebDesignPage} />
      <Route path='*' component={NotFound} />
    </Switch>
  </Router>
)

export default Routes
