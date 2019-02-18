import React from 'react'
import '../components/layout.css'
import Social from '../components/social/social'
import Song from '../components/song/song'
// import portrait from '../images/banner.jpg'
// import light_portrait from '../images/banner_light.jpg'
import daniel from '../images/good_2.jpg'
import light_daniel from '../images/light_2.jpg'
import brittany from '../images/good_3.jpg'
import light_brittany from '../images/light_3.jpg'
import logo_blue from '../images/logo_blue.png'
import logo_pink from '../images/logo_pink.png'
import logo_white from '../images/logo_white.png'
import ignoredYouGraphic from '../images/ignoredyou.png'
import isItLoveGraphic from '../images/isitlove.png'
import moveWithMeGraphic from '../images/movewithme.png'
import Arrow from '../components/arrow/arrow.js'
// import ignoredYou from './ignoredyou.mp3'
// import isItLove from './isitlove.mp3'
// import moveWithMe from './movewithme.mp3'
import test from '../newBeginningInst.m4a'
const ignoredYou = test
const isItLove = test
const moveWithMe = test


class App extends React.Component {
  state = {
    // loadFirst: false,
    loadSecond: false,
    loadThird: false,
    logoLoaded: false
  }

  componentDidMount(){
    const logoPinkLoad = new Image()
    logoPinkLoad.src = logo_pink
    logoPinkLoad.onload = () => {this.setState({logoLoaded: true})}
    // const first = new Image()
    // first.src = portrait
    // first.onload = () => {this.setState({loadFirst: true})}
    const second = new Image()
    second.src = daniel
    second.onload = () => {this.setState({loadSecond: true})}
    const third = new Image()
    third.src = brittany
    third.onload = () => {this.setState({loadThird: true})}
  }

  render () {
    // let logoPlaceHolder = <div className='logo'>loading...</div>
    // if(this.state.logoLoaded){logoPlaceHolder = <div className='logo'>
    const logoPlaceHolder = <div id='logo' className='hiddenLogo'>
      <img id='start' className='logoPink' src={logo_pink} alt='brand logo'/>
      <img className='logoWhite' src={logo_white} alt='brand logo'/>
      <img className='logoBlue' src={logo_blue} alt='brand logo'/>
    </div>

    // animateHTML taken from: https://eddyerburgh.me/animate-elements-scrolled-view-vanilla-js
    var animateHTML = () => {
      var target
      var banner
      var svg
      const init = () => {
        target = document.getElementById('logo')
        banner = document.getElementById('banner')
        svg = document.getElementById('svg')
        addEventHandlers()
        checkPosition()
      }
      const addEventHandlers = () => {
        window.addEventListener('scroll', checkPosition)
        window.addEventListener('resize', init)
      }
      const checkPosition = () => {
        if (banner.getBoundingClientRect().top < 0) {
          target.className = target.className.replace(
            'hiddenLogo',
            'logo'
          )
          svg.style.opacity = '0'
        }
      }
      return {
        init: init
      }
    }
    animateHTML().init()

    const social = 
    this.state.loadSecond ? daniel : light_daniel
    const contact = 
    this.state.loadThird ? brittany : light_brittany

    return (
      <div className='App'>
        <div id='aboutus'>
          <div id='banner'>
            {logoPlaceHolder}
            {/* <img src={aboutUs} alt='banner graphic' /> */}
          </div>
          <div id='svg'>
            <Arrow />
          </div>
          <p id='bio'>Bleum is an electronic music duo consisting of producer Daniel James
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
