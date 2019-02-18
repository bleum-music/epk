import React from 'react'
import '../components/layout.css'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
// import portrait from '../images/banner.jpg'
// import light_portrait from '../images/banner_light.jpg'
import daniel from '../images/good_2.jpg'
import light_daniel from '../images/light_2.jpg'
import brittany from '../images/good_3.jpg'
import light_brittany from '../images/light_3.jpg'
import logo_blue from '../images/logo_blue.png'
import logo_pink from '../images/logo_pink.png'
import logo_white from '../images/logo_white.png'
import Arrow from '../components/arrow/arrow.js'
import Song from '../components/song/song'
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

  nullHandler = (id, classN) => {
    if(document){
      if(document.getElementById(id) !== null) {
        this.animate(id, classN).init()
      } else {
        return
      }
    }
  }
  animate = (id, classN) => {
    var target
    var windowHeight
    const init = () => {
      target = document.getElementById(id)
      if (window) {
        windowHeight = window.innerHeight
      }
      addEventHandlers()
      checkPosition()
    }
    const addEventHandlers = () => {
      if (window) {
        window.addEventListener('scroll', checkPosition)
        window.addEventListener('resize', init)
      }
    }
    const checkPosition = () => {
      var distanceFromTop = target.getBoundingClientRect().top
      var distanceFromBottom = target.getBoundingClientRect().bottom
      if (windowHeight - distanceFromTop <= 0 || windowHeight - distanceFromBottom > windowHeight) {
        target.classList.add('hidden')
        target.classList.remove(classN)
      } else {
        target.classList.add(classN)
        target.classList.remove('hidden')
      }
    }
    return {
      init: init
    }
  }

  render () {
    var animateLogo = () => {
      var target
      var banner
      var svg
      var logoPink
      var logoWhite
      var logoBlue
      var bio
      var windowHeight
      const init = () => {
        target = document.getElementById('logo')
        banner = document.getElementById('banner')
        logoPink = document.getElementById('logoPink')
        logoWhite = document.getElementById('logoWhite')
        logoBlue = document.getElementById('logoBlue')
        svg = document.getElementById('svg')
        if (window) {
          windowHeight = window.innerHeight
        }
        addEventHandlers()
        checkPosition()
      }
      const addEventHandlers = () => {
        if (window) {
          window.addEventListener('scroll', checkPosition)
          window.addEventListener('resize', init)
        }
      }
      const checkPosition = () => {
        var distanceFromTop = banner.getBoundingClientRect().top
        var distanceFromBottom = banner.getBoundingClientRect().bottom
        if (windowHeight - distanceFromTop > windowHeight && windowHeight + distanceFromBottom > windowHeight) {
          target.classList.add('logo')
          target.classList.remove('hidden')
          logoPink.classList.add('logoPink')
          logoWhite.classList.add('logoWhite')
          logoBlue.classList.add('logoBlue')
          svg.style.opacity = '0'
          svg.style.height = '0'
        } 
        else if (distanceFromTop >= 0) {
          svg.style.opacity = '1'
          svg.style.height = '100%'
        }
        else {
          target.classList.add('hidden')
          target.classList.remove('logo')
          logoPink.classList.remove('logoPink')
          logoWhite.classList.remove('logoWhite')
          logoBlue.classList.remove('logoBlue')
        }
      }
      return {
        init: init
      }
    }
    if (typeof document !== 'undefined') {
      const banner = document.getElementById('banner')
      if(banner !== null) {
        animateLogo().init()
      }
    }
    
    // let logoPlaceHolder = <div className='logo'>loading...</div>
    // if(this.state.logoLoaded){logoPlaceHolder = <div className='logo'>
    const logo = <div id='logo'>
      <img id='logoPink' src={logo_pink} alt='brand logo'/>
      <img id='logoWhite' src={logo_white} alt='brand logo'/>
      <img id='logoBlue' src={logo_blue} alt='brand logo'/>
    </div>

    const social = 
    this.state.loadSecond ? daniel : light_daniel
    const contact = 
    this.state.loadThird ? brittany : light_brittany

    return (
      <div className='App'>
        <div id='aboutus'>
          <div id='banner'>
            {logo}
            {/* <img src={aboutUs} alt='banner graphic' /> */}
          </div>
          <div id='svg'>
            <Arrow />
          </div>
          <div id='bio' onLoad={this.nullHandler('bio','bio')}>
            <p className='bio'>Bleum is an electronic music duo consisting of producer Daniel James
            and singer/ songwriter Brittany McQuinn. They began working together in
            2016 after Daniel saw Brittany perform live. Impressed by her pop sensibility,
            he urged her to send him some vocal tracks.</p>
            <p className='bio'>They haven't stopped making music since. After the release of Brittanyʼs
            solo EP, Bold (produced mostly by Daniel), they tried something untethered
            from each others individual identities. The first single 'Lose You' was released
            and Bleum was born. They've gone on to perform at multiple festivals. Their
            latest single 'Visit' was selected to be on Blundstone Canada's online playlist.</p>
          </div>
        </div>
        <div id='music'>
          <div className='spacer' />
          <div className='title'>music</div>
          <div id='songs' className='singles' onLoad={this.nullHandler('songs','songs')}>
            <Song graphic={ignoredYouGraphic} song={ignoredYou} title='ignored you' id='ignore' index='0' />
            <Song graphic={isItLoveGraphic} song={isItLove} title='is it love' id='isIt' index='1' />
            <Song graphic={moveWithMeGraphic} song={moveWithMe} title='move with me' id='move' index='2' />
          </div>
          <iframe
              id='iframe'
              title='bleum live'
              src='https://www.youtube.com/embed/Vrg7yaniKn4'
              frameBorder='0'
              allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              onLoad={this.nullHandler('iframe','video')}>
          </iframe>
        </div>
        <div id='social'>
          <div className='spacer' />
          <div>social media</div>
          <img id='dan' src={social} alt='daniel' onLoad={this.nullHandler('dan','image')}/>
          <div id='socialIcons'>
            <div id='facebook' className='links' onLoad={this.nullHandler('facebook','faceAnimate')}>
              <a
                href='https://www.facebook.com/bleummusic/?ref=br_rs'
                target='_blank'
                rel='noopener noreferrer'>
                <img id='fb' src={facebook} alt='link to facebook' />
              </a>
            </div>
            <div id='instagram' className='links' onLoad={this.nullHandler('instagram','instaAnimate')}>
              <a
                href='https://www.instagram.com/bleummusic/?hl=en'
                target='_blank'
                rel='noopener noreferrer'>
                <img src={instagram} alt='link to instagram' />
              </a>
            </div>
            <div id='buyDiv' className='links' onLoad={this.nullHandler('buyDiv','buyAnimate')}>
              <a
                href='https://fanlink.to/visitbybleum'
                target='_blank' rel='noopener noreferrer'
                id='buy'>
                <p>stream/ </p>
                <p>buy</p>
              </a>
            </div>
          </div>
        </div>
        <div id='contact'>
          <div className='spacer' />
          <div>contact</div>
          <img id='britt' src={contact} alt='brittany' onLoad={this.nullHandler('britt','imageVV')}/>
          <p><a id='mail' href='mailto:bleum.music@gmail.com' target='_top' onLoad={this.nullHandler('mail','mail')}>bleum.music@gmail.com</a></p>
        </div>
      </div>
    )
  }
}

export default App
