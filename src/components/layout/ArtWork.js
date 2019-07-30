import React, { Component } from 'react'
import Waypoint from 'react-waypoint'
import classNames from 'classnames'
import './ArtWork.css'

class ArtWork extends Component {
  constructor () {
    super(...arguments)
    this._handleEnter = this._handleEnter.bind(this)
    this._handleLeave = this._handleLeave.bind(this)
  }

  render () {
    const {
      animateIn
    } = this.state || {}

    const {
      title,
      medium,
      description,
      img
    } = this.props.work || {}

    return (
      <Waypoint
        onEnter={this._handleEnter}
        onLeave={this._handleLeave}
      >
        <div className={classNames('art', {
          'animate-in': animateIn,
          reverse: this.props.reversed
        })}>
          <div className='art__description'>
            <h3 className='art-description__title'>{title}</h3>
            <h5 className='art-description__medium'>{medium}</h5>
            <p className='art-description__desc'>{description}</p>
          </div>
          <img className='art__img' src={img} alt={'Image for ' + title} />
        </div>
      </Waypoint>
    )
  }

  _handleEnter () {
    this.setState({
      animateIn: true
    })
  }

  _handleLeave () {
    this.setState({
      animateIn: false
    })
  }
}

ArtWork.propTypes = {
  // animateIn: React.PropTypes.bool,
  work: React.PropTypes.object
}

export default ArtWork
