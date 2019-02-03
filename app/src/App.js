import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Topbar from 'Components/Topbar/Topbar'
import PrivateRoute from 'Components/PrivateRoute'
import Login from 'Views/Login/Login'
import './style.scss'

const Home = () => <h2>Homepage</h2>
const PrivatePage = () => <h2>Private</h2>

class App extends Component {
  render () {
    return (
      <Router>
        <div className={'main-container'}>
          <Topbar />
          <Route path='/' exact component={Home} />
          <Route path='/login/' component={Login} />
          <PrivateRoute path='/private' authenticated={false} component={PrivatePage} />
        </div>
      </Router>
    )
  }
}

export default App
