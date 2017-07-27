import React, { Component } from 'react'
import $ from 'jquery'
import './Hero.css'

class Hero extends Component {
  constructor () {
    super(...arguments)
    this.scrollDown = this.scrollDown.bind(this)
  }

  render () {
    return (
      <section className={'hero ' + (this.props.className || '')}>
        <div className='hero__content'>{this.props.content}</div>
        <a className='hero__scroll-down' href='#' onClick={this.scrollDown}>
          <i />
          <i />
          <i />
        </a>
      </section>
    )
  }

  scrollDown () {
    $('html, body').animate({
      scrollTop: window.innerHeight
    }, 1000)
  }
}

Hero.propTypes = {
  content: React.PropTypes.string,
  className: React.PropTypes.string
}

export default Hero
