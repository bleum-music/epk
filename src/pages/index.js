import React from 'react'
import '../components/layout.css'
import Social from '../components/social/social'
import Song from '../components/song/song'
import portrait from '../images/banner.jpg'
import light_portrait from '../images/banner_light.jpg'
import daniel from '../images/good_2.jpg'
import light_daniel from '../images/light_2.jpg'
import brittany from '../images/good_3.jpg'
import light_brittany from '../images/light_3.jpg'
import logo from '../components/logo.png'
import ignoredYouGraphic from '../images/ignoredyou.png'
import isItLoveGraphic from '../images/isitlove.png'
import moveWithMeGraphic from '../images/movewithme.png'
// import ignoredYou from './ignoredyou.mp3'
// import isItLove from './isitlove.mp3'
// import moveWithMe from './movewithme.mp3'
import test from '../newBeginningInst.m4a'
const ignoredYou = test
const isItLove = test
const moveWithMe = test


class App extends React.Component {
  state = {
    isLoaded: false,
    loadFirst: false,
    loadSecond: false,
    loadThird: false,
    logoLoaded: false
  }

  componentDidMount(){
    const logoLoad = new Image()
    logoLoad.src = logo
    logoLoad.onload = () => {this.setState({logoLoaded: true})}
    const first = new Image()
    first.src = portrait
    first.onload = () => {this.setState({loadFirst: true, isLoaded: true})}
    const second = new Image()
    second.src = daniel
    second.onload = () => {this.setState({loadSecond: true})}
    const third = new Image()
    third.src = brittany
    third.onload = () => {this.setState({loadThird: true})}
  }

  render () {
    let isLoaded = this.state.isLoaded ? 'ready' : 'placeHolder'

    let logoPlaceHolder = <div className='logo'>bleum</div>
    if(this.state.logoLoaded){logoPlaceHolder = <img className='logo' src={logo} alt='brand logo'/>}

    const aboutUs = 
    this.state.loadFirst ? portrait : light_portrait
    const social = 
    this.state.loadSecond ? daniel : light_daniel
    const contact = 
    this.state.loadThird ? brittany : light_brittany

    return (
      <div className='App'>
        <div id='aboutus' className={isLoaded}>
          <div id='banner'>
            {logoPlaceHolder}
            <img src={aboutUs} alt='banner graphic' />
          </div>
          <div className='spacer' />
          <p>Bleum is an electronic music duo consisting of producer Daniel James
          and singer/ songwriter Brittany McQuinn. They began working together in
          2016 after Daniel saw Brittany perform live. Impressed by her pop sensibility,
          he urged her to send him some vocal tracks.</p>
          <p>They haven't stopped making music since. After the release of Brittanyʼs
          solo EP, Bold (produced mostly by Daniel), they tried something untethered
          from each others individual identities. The first single 'Lose You' was released
          and Bleum was born. They've gone on to perform at multiple festivals. Their
          latest single 'Visit' was selected to be on Blundstone Canada's online playlist.</p>
        </div>
        <div id='music'>
          <div className='spacer' />
          <div className='title'>music</div>
          <div className='singles'>
            <Song graphic={ignoredYouGraphic} song={ignoredYou} title='ignored you' id='ignore' index='0' />
            <Song graphic={isItLoveGraphic} song={isItLove} title='is it love' id='isIt' index='1' />
            <Song graphic={moveWithMeGraphic} song={moveWithMe} title='move with me' id='move' index='2' />
          </div>
          <iframe
              title='bleum live'
              src='https://www.youtube.com/embed/Vrg7yaniKn4'
              frameBorder='0'
              allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen>
          </iframe>
        </div>
        <div id='social'>
          <div className='spacer' />
          <div>social media</div>
          <img src={social} alt='daniel' />
          <Social />
        </div>
        <div id='contact'>
          <div className='spacer' />
          <div>contact</div>
          <img src={contact} alt='brittany' />
          <p><a href='mailto:bleum.music@gmail.com' target='_top'>bleum.music@gmail.com</a></p>
        </div>
      </div>
    )
  }
}

export default App
