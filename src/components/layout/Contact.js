import React, { Component } from 'react'
import classNames from 'classnames'
import './Contact.css'

const HEADER = 'Get in touch'

class Contact extends Component {
  render () {
    const letters = HEADER.split('').map((l, i) => (
      <i
        key={i}
        style={{
          transition: `${i > 0 ? i / 8 : 0}s opacity ${1 / 8}s ease-in-out`
        }}
      >
        {l}
      </i>
    ))

    return (
      <section className={classNames('contact', {
        'animate-in': this.props.animateIn
      })}>
        <div className='contact__content'>
          <h1>{letters}</h1>
          {this.props.children ||
            <div>
              <h2 className='contact__email'><a href='mailto:james@twox.io'>james@twox.io</a></h2>
              <h2 className='contact__tel'><a href='tel:6055937302'>(605) 593-7302</a></h2>
            </div>
          }
        </div>
      </section>
    )
  }
}

Contact.propTypes = {
  animateIn: React.PropTypes.bool
}

export default Contact
