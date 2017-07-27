import React, { Component } from 'react'
import $ from 'jquery'
import './SlideInContent.css'

class SlideInContent extends Component {
  constructor () {
    super(...arguments)
    this._handleScroll = this._handleScroll.bind(this)
  }

  render () {
    return (
      <section className='action-content'>
        <h1 className='action-content__heading'>{this.props.heading}</h1>
        <p className='action-content__body'>{this.props.body}</p>
      </section>
    )
  }

  componentDidMount () {
    window.addEventListener('scroll', this._handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this._handleScroll)
  }

  _handleScroll (event) {
    let scrollTop = event.srcElement.body.scrollTop + $(this.el).height()

    this.setState({
      displayOpaque: scrollTop > window.innerHeight
    })
  }
}

SlideInContent.propTypes = {
  heading: React.PropTypes.string,
  body: React.PropTypes.string
}

export default SlideInContent
