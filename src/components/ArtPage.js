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
import Character from'../../public/img/Character_Design.jpg'
import EmergencyR from'../../public/img/EmergencyResponders.jpg'
import Frankenstein from'../../public/img/Frankenstein.jpg'
import Gorilla from'../../public/img/Gorilla.jpg'
import SimonTedImg from '../../public/img/SimonandTed.jpg'
import TreeImg from '../../public/img/TreePenWork.jpg'
import RetroDragon from '../../public/img/RetroDragon.jpg'
import Train from '../../public/img/Train.png'
import FancyShoe from '../../public/img/FancyShoe.png'
import Girl from '../../public/img/Girl.jpg'
import Gators from '../../public/img/Gators.jpg'
import Camping from '../../public/img/Camping.jpg'
import SignatureImg from '../../public/img/jensensig.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './ArtPage.css'

const works = [{
  title: 'Gorilla',
  img: Gorilla
}, {
  title: 'Characters',
  img: Character
}, {
  title: 'responders',
  img: EmergencyR
}, {
  title: 'Frankenstein',
  img: Frankenstein
}, {
  title: 'Gators with pizza',
  img: Gators
}, {
  title: 'Train',
  img: Train
}, {
  title: 'Camping',
  img: Camping
}, {
  title: 'Girl',
  img: Girl
}, {
  title: 'Dragon Daycare',
  medium: 'Pen, Watercolor and Colored Pencil',
  description: 'Cartoon style of a Dragon Daycare Facility completed in watercolor, pen and colored pencil.',
  img: DragonImg
}, {
  title: 'Fancy Shoe',
  img: FancyShoe
}, {
  title: 'When Fish Fly',
  medium: 'Digital, Procreate',
  description: 'Cartoon style of a girl blowing bubbles that contain fish completed in the digital medium Procreate.',
  img: CardImg
}, {
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
  title: 'Retro Dragon',
  img: RetroDragon
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
}]

const reviews = [{
  text: 'Jensen was awesome to work with! She was able to take my rough sketches and add her own creative touch and turn them into something special. She was always ahead of deadlines and was very clear with what she was working on. When provided ideas and edits to make, she did a great job with figuring out how to implement them right away. I would highly recommend her for any sort of illustration or artistic project as she can do some amazing work!',
  person: 'Shane'
}, {
  text: 'Would definitely work with them again.',
  person: 'Miller'
}, {
  text: 'Jensen was an absolute pleasure to work with! I gave her my ideas and she created a workbook that was beyond my expectations! She also communicated effectively and revised any changes I suggested promptly! Jensen also helped walk me through the copyright site to ensure my workbook had a copyright. I would hire Jensen again for any additional jobs for designing!',
  person: 'Christina'
}, {
  text: 'Ms. Collins was a true dream to work with. Not only was she incredibly prompt and professional she also brought my children’s book to life with her fun, whimsical style. I hope to collaborate with her again on future projects.',
  person: 'Ann'
}, {
  text: 'This was a great experience. Jensen was extremely attentive to my project and made suggestions that made the end product better. When I specified some things incorrectly for my application, she made adjustments that were because of my mistakes without any hesitation. Her responsiveness and ability to hit deadlines was exceptional. I have already asked her to help with another project.',
  person: 'Will'
}, {
  text: 'Jensen was wonderful to work with! She listened to what I wanted and delivered asap!',
  person: 'Karen'
}, {
  text: 'Jensen delivered good samples and the final product was remarkable. Her characters for my book were just as I had imagined. Her skills were excellent. Communication was perfect. She worked collaboratively with me and I was so pleased with her work that I would recommend her to anyone looking for an illustrator. I hope to hire her again with my upcoming book.',
  person: 'Julia'
}, {
  text: 'Super easy to work with and very talented!',
  person: 'Thomas'
}, {
  text: 'Jensen was fast, cordial, and accurate. Highly recommended!',
  person: 'Wayne'
}]

const navItems = [{
  text: 'Latest Works',
  el: '.works'
}, {
  text: 'Reviews',
  el: '.reviews'
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

    const fiveStars = (
      <div className="five-stars">
        {[ ...new Array(5)].map(() => (<FontAwesomeIcon icon={faStar} />))}
      </div>
    );

    return (
      <div className='application__container'>
        <Navigation location={this.props.location} navItems={navItems} centerImg={SignatureImg} />

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

        <section className='artsy__section works'>
          <h1>
            Latest Works
            <small>For more works, see my <a href='https://www.instagram.com/jennypennypaper/' target='_blank' rel='noopener'>ever-expanding feed on instagram</a>.</small>
          </h1>
          <div className="works__container">{works.map((work, i) => <ArtWork key={i} reversed={!!(i % 2)} work={work} />)}</div>
        </section>

        <hr />

        <section className='artsy__section reviews'>
          <h1>
            Reviews
            <small>My reviews from past books and art commissions</small>
          </h1>
          <div className='reviews__text-blocks'>
            {reviews.map(({ text, person }) =>
              <div className='review-text-block'>
                <h3 className='review-text-block__person'>
                  {person}
                  {fiveStars}
                </h3>
                <p>{text}</p>
              </div>
            )}
          </div>
        </section>

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

        <Waypoint
          onEnter={this._handleEnter('Contact')}
          onLeave={this._handleLeave('Contact')}
          bottomOffset='200px'
        >
          <div>
            <Contact animateIn={animateInContact}>
              <h2 className='contact__email'><a href='mailto:jensen@twox.io'>jensen@twox.io</a></h2>
              <h2 className='contact__tel'><a href='tel:6055937396'>(605) 593-7396</a></h2>
              <h2 className='contact__tel'><a href='https://www.instagram.com/jennypennypaper' target='_blank'>Follow me on Instagram</a></h2>
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
