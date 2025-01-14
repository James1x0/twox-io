import React, { Component } from 'react'
import Waypoint from 'react-waypoint'
import classNames from 'classnames'
import Navigation from './layout/Navigation'
import Contact from './layout/Contact'
import Hero from './display/Hero'
import { Link } from 'react-router-dom'
import './Landing.css'

class App extends Component {
  constructor () {
    super(...arguments)
    this._handleEnter = this._handleEnter.bind(this)
    this._handleLeave = this._handleLeave.bind(this)
  }

  render () {
    const {
      animateInLandingHero
    } = this.state || {}

    return (
      <div className='application__container'>
        <Navigation location={this.props.location} />

        <Waypoint
          onEnter={this._handleEnter('LandingHero')}
          onLeave={this._handleLeave('LandingHero')}
        >
          <div className={classNames('hero', 'hero__landing-page', {
            'animate-in': animateInLandingHero
          })}>
            <div className='hero__content'>
              <Link to='/web'>Web Development</Link>
            </div>
          </div>
        </Waypoint>
      </div>
    )
  }

  _handleEnter (context) {
    return () => {
      this.setState({
        [`animateIn${context}`]: true
      })
    }
  }

  _handleLeave (context) {
    return () => {
      this.setState({
        [`animateIn${context}`]: false
      })
    }
  }
}

export default App
