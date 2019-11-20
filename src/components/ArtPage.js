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
import CookieImg from '../../public/img/ACookieTooMany.jpg'
import GrandparentsImg from '../../public/img/grandparents.jpg'
import QAMCImg from'../../public/img/QAMC.jpg'
import SimonTedImg from '../../public/img/SimonandTed.jpg'
import TreeImg from '../../public/img/TreePenWork.jpg'
import './ArtPage.css'

const works = [{
  title: 'Simon and Ted',
  medium: 'Pen, Watercolor and Colored Pencil',
  description: 'Cartoon style of an adventurous boy and his best friend the sea turtle on an underwater adventure completed in watercolor, pen and colored pencil.',
  img: SimonTedImg
}, { 
  title: 'Portrait of Grandparents',
  medium: 'Pen, Watercolor and Colored Pencil',
  description: 'Cartoon style of sweet biracial grandparents completed in watercolor, pen and colored pencil.',
  img: GrandparentsImg
}, {
  title: 'Dragon Daycare',
  medium: 'Pen, Watercolor and Colored Pencil',
  description: 'Cartoon style of a Dragon Daycare Facility completed in watercolor, pen and colored pencil.',
  img: DragonImg
}, {
  title: 'A Cookie Too Many',
  medium: 'Pen and Watercolor',
  description: 'Cartoon style of Santa stuck in a chimney completed in watercolor and pen.',
  img: CookieImg
}, {
  title: 'Monster of Disgise',
  medium: 'Pen and Water Based Ink',
  description: 'Cartoon style of a Sea Monster with a Mermaid tail luring a fishing boat completed in water based inks and pen.',
  img: ShipImg
}, {
  title: 'A Sheeps Joy',
  medium: 'Pen and Watercolor.',
  description: 'Cartoon style of an elated sheep watching a ladybug completed in watercolor and pen.',
  img: SheepImg
}, {
  title: 'The Fairy Garden',
  medium: 'Pen and Watercolor',
  description: 'Cartoon style of a blissful fairy completed in watercolor and pen.',
  img: FairyImg
}, {
  title: 'Mechanic',
  medium: 'Digital, Procreate',
  description: 'Cartoon style of a mechanic for use in logo completed in the digital medium Procreate.',
  img: QAMCImg
}, {  
  title: 'When Fish Fly',
  medium: 'Digital, Procreate',
  description: 'Cartoon style of a girl blowing bubbles that contain fish completed in the digital medium Procreate.',
  img: CardImg
}, {
  title: 'Treescape',
  medium: 'Pen',
  description: 'Cartoon linework of a landscape  including  mountains, tree and pond completed in Pen.',
  img: TreeImg
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
              <p>Jensen's whimiscal children's book illustrations are bound to amaze. Ten years of experience, an Associate in Arts degree, & raw talent culminate into quality, professional illustrations that make an impression.</p>
            </div>
          </Waypoint>
        </section>

        <section className='works'>
          <h1>
            Latest Works
            <small>For more works, see my <a href='https://www.instagram.com/jennypennypaper/' target='_blank' rel='noopener'>ever-expanding feed on instagram</a>.</small>
          </h1>
          <div className="works__container">{works.map((work, i) => <ArtWork key={i} reversed={!!(i % 2)} work={work} />)}</div>
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
