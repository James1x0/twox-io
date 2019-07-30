import React, { Component } from 'react'
import Waypoint from 'react-waypoint'
import classNames from 'classnames'
import Navigation from './layout/Navigation'
import Contact from './layout/Contact'
import ArtWork from './layout/ArtWork'
import Hero from './display/Hero'
import FairyImg from '../../public/img/fairy.jpg'
import DragonImg from '../../public/img/dragon.jpg'
import SheepImg from '../../public/img/sheep.jpg'
import ShipImg from '../../public/img/ship.jpg'
import CardImg from '../../public/img/card.jpg'
import './ArtPage.css'

const works = [{
  title: 'Fairy',
  medium: 'Pen & Watercolor',
  description: 'A short study on a whimiscal fairy with traditional mediums. Completed in just a few hours.',
  img: FairyImg
}, {
  title: 'Dragon Daycare',
  medium: 'Pen & Watercolor',
  description: 'Fantasy study - I am very happy with the end result!',
  img: DragonImg
}, {
  title: 'Sheep & Ladybug',
  medium: 'Pen & Watercolor',
  description: 'Client illustration work for a children\'s book. This quirky character was fun to draw.',
  img: SheepImg
}, {
  title: 'Monster of the Depths',
  medium: 'Water-activated Ink & Pen',
  description: 'Darker, erie style of a mythical creature from the depths. A combination of details and dark colors really sets the mood.',
  img: ShipImg
}, {
  title: 'Bubbles for business',
  medium: 'Procreate',
  description: 'Bubbles for business was made on the go with my iPad utilizing procreate. This is the base design for my new business cards.',
  img: CardImg
}]

const navItems = [{
  text: 'Latest Works',
  el: '.works'
}]

class App extends Component {
  constructor () {
    super(...arguments)
    this._handleEnter = this._handleEnter.bind(this)
    this._handleLeave = this._handleLeave.bind(this)
  }

  componentDidMount () {
    console.log(`
        -----------------------------------------------------------------
        Hello there!
        Hopefully there's nothing to see here. ¯\\_(ツ)_/¯
        -----------------------------------------------------------------
    `)
  }

  render () {
    const {
      animateInIndexHero,
      animateInStory,
      animateInContact
    } = this.state || {}

    return (
      <div className='application__container'>
        <Navigation location={this.props.location} navItems={navItems} />

        <Waypoint
          onEnter={this._handleEnter('IndexHero')}
          onLeave={this._handleLeave('IndexHero')}
        >
          <div>
            <Hero
              className={classNames('hero', 'hero__art-page', {
                'animate-in': animateInIndexHero
              })}
              content='Whimsical, thoughtful &amp; professional illustration'
            />
          </div>
        </Waypoint>

        <section className={
          classNames('story__developer', 'story__jensen', {
            'animate-in': animateInStory
          })}
        >
          <Waypoint
            onEnter={this._handleEnter('Story')}
            onLeave={this._handleLeave('Story')}
          >
            <div className='story__content'>
              <h1><span>Jensen</span> | <span>Artist & Illustrator</span></h1>
              <p>Whether it's for a children's book, logo, or marketing, Jensen's whimiscal artist style is bound to amaze. Ten years of experience, an Associate in Arts degree, & raw talent culminate into quality, professional illustrations.</p>
            </div>
          </Waypoint>
        </section>

        <section className='works'>
          <h1>
            Latest Works
            <small>For more works, see my <a href='https://www.instagram.com/jennypennypaper/' target='_blank' rel='noopener'>ever-expanding feed on instagram</a>.</small>
          </h1>
          {works.map((work, i) => <ArtWork key={i} reversed={!!(i % 2)} work={work} />)}
        </section>

        <Waypoint
          onEnter={this._handleEnter('Contact')}
          onLeave={this._handleLeave('Contact')}
          bottomOffset='200px'
        >
          <div>
            <Contact animateIn={animateInContact}>
              <h2 className='contact__email'><a href='mailto:jensen@twox.io'>jensen@twox.io</a></h2>
              <h2 className='contact__tel'><a href='tel:6055937396'>(605) 593-7396</a></h2>
              <h3 className='contact__tel'><a href='https://www.upwork.com/o/profiles/users/_~01fde082ee2ea9a07b/' target='_blank'>Hire me</a></h3>
              <h3 className='contact__tel'><a href='https://www.instagram.com/jennypennypaper' target='_blank'>Follow me on Instagram</a></h3>
            </Contact>
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
