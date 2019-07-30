import React, { Component } from 'react'
import $ from 'jquery'
import classNames from 'classnames'
import './Navigation.css'

class Navigation extends Component {
  constructor () {
    super(...arguments)
    this._handleScroll = this._handleScroll.bind(this)
    this.scrollToEl = this.scrollToEl.bind(this)
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
        <div className='navigation__logo' />
        {this.props.location.pathname !== '/' && <ul>
          {this.props.navItems && this.props.navItems.map(item => (
            <li key={item.el}><a href='#' onClick={(e) => this.scrollToEl(e, item.el)}>{item.text}</a></li>
          ))}
          <li>
            <a href='#' onClick={(e) => this.scrollToEl(e, '.contact')} >Get in touch</a>
          </li>
        </ul>}
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

  scrollToEl (e, el) {
    e.preventDefault()
    console.log(el)

    $('html, body').animate({
      scrollTop: $(el).offset().top
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
