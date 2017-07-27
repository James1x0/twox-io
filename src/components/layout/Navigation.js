import React, { Component } from 'react'
import $ from 'jquery'
import classNames from 'classnames'
import './Navigation.css'

class Navigation extends Component {
  constructor () {
    super(...arguments)
    this._handleScroll = this._handleScroll.bind(this)
    this.scrollToContact = this.scrollToContact.bind(this)
    this.scrollToTop = this.scrollToTop.bind(this)
  }

  render () {
    return (
      <nav className={
        classNames(
          'application__navigation',
          {
            'application__navigation--opaque': this.state && this.state.displayOpaque
          }
        )}
        ref={(nav) => { this.el = nav }}
      >
        <div className='navigation__logo' onClick={this.scrollToTop} />
        <ul>
          <li>
            <a href='#' onClick={this.scrollToContact}>Get in touch</a>
          </li>
        </ul>
      </nav>
    )
  }

  componentDidMount () {
    window.addEventListener('scroll', this._handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this._handleScroll)
  }

  _handleScroll (event) {
    let scrollTop = $(window).scrollTop() + $(this.el).height()

    this.setState({
      displayOpaque: scrollTop > window.innerHeight
    })
  }

  scrollToContact (e) {
    e.preventDefault()

    $('html, body').animate({
      scrollTop: $('.contact').offset().top
    }, 1000)
  }

  scrollToTop (e) {
    e.preventDefault()

    $('html, body').animate({
      scrollTop: 0
    }, 1000)
  }
}

export default Navigation
