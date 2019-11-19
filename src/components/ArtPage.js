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
  img: SimonTedImg,
  title: 'Fairy',
  medium: 'Pen & Watercolor'
}, { 
  img: GrandparentsImg
}, {
  img: DragonImg
}, {
  img: CookieImg
}, {
  img: ShipImg
}, {
  img: SheepImg
}, {
  img: FairyImg
}, {
  img: QAMCImg
}, {  
  img: CardImg
}, {
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
