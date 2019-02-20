import React from 'react'
import {Helmet} from 'react-helmet'
import '../components/layout.css'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import portrait from '../images/good_0.jpg'
import light_portrait from '../images/light_0.jpg'
// import daniel from '../images/good_2.jpg'
// import light_daniel from '../images/light_2.jpg'
// import brittany from '../images/good_3.jpg'
// import light_brittany from '../images/light_3.jpg'
// import aboutTitle from '../images/about.png'
import musicTitle from '../images/music.png'
import contactTitle from '../images/contact.png'
import logo_blue from '../images/logo_blue.png'
import logo_pink from '../images/logo_pink.png'
import logo_white from '../images/logo_white.png'
import Arrow from '../components/arrow/arrow.js'
import Song from '../components/song/song'
import ignoredYouGraphic from '../images/ignoredyou.png'
import isItLoveGraphic from '../images/isitlove.png'
import moveWithMeGraphic from '../images/movewithme.png'
import ignoredYou from './ignoredyou.wav'
import isItLove from './isitlove.wav'
import moveWithMe from './movewithme.wav'

class App extends React.Component {
  state = {
    loadFirst: false,
    // loadSecond: false,
    // loadThird: false,
    logoLoaded: false
  }

  componentDidMount(){
    const logoPinkLoad = new Image()
    logoPinkLoad.src = logo_pink
    logoPinkLoad.onload = () => {this.setState({logoLoaded: true})}
    const first = new Image()
    first.src = portrait
    first.onload = () => {this.setState({loadFirst: true})}
    // const second = new Image()
    // second.src = daniel
    // second.onload = () => {this.setState({loadSecond: true})}
    // const third = new Image()
    // third.src = brittany
    // third.onload = () => {this.setState({loadThird: true})}

    if (typeof document !== 'undefined') {
      const banner = document.getElementById('banner')
      if(banner !== null) {
        this.animateLogo().init()
      }
    }
  }

  nullHandler = (id, classN) => {
    if(typeof document !== 'undefined'){
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
      if (typeof window !== 'undefined') {
        windowHeight = window.innerHeight
      }
      addEventHandlers()
      checkPosition()
    }
    const addEventHandlers = () => {
      if (typeof window !== 'undefined') {
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

  animateLogo = () => {
    var target
    var banner
    var svg
    var logoPink
    var logoWhite
    var logoBlue
    var windowHeight
    const init = () => {
      target = document.getElementById('logo')
      banner = document.getElementById('banner')
      logoPink = document.getElementById('logoPink')
      logoWhite = document.getElementById('logoWhite')
      logoBlue = document.getElementById('logoBlue')
      svg = document.getElementById('svg')
      if (typeof window !== 'undefined') {
        windowHeight = window.innerHeight
      }
      addEventHandlers()
      checkPosition()
    }
    const addEventHandlers = () => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', checkPosition)
        window.addEventListener('resize', init)
      }
    }
    const checkPosition = () => {
      var distanceFromTop = banner.getBoundingClientRect().top
      var distanceFromBottom = banner.getBoundingClientRect().bottom
      // if (windowHeight - distanceFromTop > windowHeight && windowHeight + distanceFromBottom > windowHeight) {
      if (windowHeight + distanceFromBottom < windowHeight && distanceFromBottom < 0) {
        target.classList.add('hidden')
        target.classList.remove('logo')
        logoPink.classList.remove('logoPink')
        logoWhite.classList.remove('logoWhite')
        logoBlue.classList.remove('logoBlue')
      } 
      if (distanceFromTop < 0) {
        svg.style.opacity = '0'
        svg.style.height = '0'
      }
      if (distanceFromBottom > 0) {
        target.classList.add('logo')
        target.classList.remove('hidden')
        logoPink.classList.add('logoPink')
        logoWhite.classList.add('logoWhite')
        logoBlue.classList.add('logoBlue')
      }
      if (distanceFromTop > 0) {
        svg.style.opacity = '1'
        svg.style.height = '15vh'
      }
    }
    return {
      init: init
    }
  }

  render () {
    // let logoPlaceHolder = <div className='logo'>loading...</div>
    // if(this.state.logoLoaded){logoPlaceHolder = <div className='logo'>
    const logo = <div id='logo'>
      <img id='logoPink' src={logo_pink} alt='brand logo'/>
      <img id='logoWhite' src={logo_white} alt='brand logo'/>
      <img id='logoBlue' src={logo_blue} alt='brand logo'/>
    </div>

    const couch = this.state.loadFirst? portrait : light_portrait
    // const social = 
    // this.state.loadSecond ? daniel : light_daniel
    // const contact = 
    // this.state.loadThird ? brittany : light_brittany

    return (
      <div className='App'>
        <Helmet>
          <meta 
            charSet='utf-8'
            name='viewport'
            content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' />
        </Helmet>
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
          <div className='title'><img id='musicTitle' src={musicTitle} alt='music heading'/></div>
          <div id='songs' className='singles' onLoad={this.nullHandler('songs','songs')}>
            <Song graphic={ignoredYouGraphic} song={ignoredYou} title='ignored you' id='ignore' index='0' />
            <Song graphic={isItLoveGraphic} song={isItLove} title='is it love' id='isIt' index='1' />
            <Song graphic={moveWithMeGraphic} song={moveWithMe} title='move with me' id='move' index='2' />
          </div>
          <iframe
              id='iframe'
              title='bleum live'
              src='https://www.youtube.com/embed/6T11XMhEWCI'
              frameBorder='0'
              allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              onLoad={this.nullHandler('iframe','video')}>
          </iframe>
        </div>
        <div id='social'>
          <div className='spacer' />
          {/* <div><img id='aboutTitle' src={aboutTitle} alt='social media heading'/></div> */}
          <div><img id='contactTitle' src={contactTitle} alt='contact heading'/></div>
          <img id='dan' src={couch} alt='daniel and brittany' onLoad={this.nullHandler('dan','image')}/>
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
          {/* <div className='spacer' /> */}
          {/* <div><img id='contactTitle' src={contactTitle} alt='contact heading'/></div> */}
          {/* <img id='britt' src={contact} alt='brittany' onLoad={this.nullHandler('britt','imageVV')}/> */}
          <p><a id='mail' href='mailto:bleum.music@gmail.com' target='_top' onLoad={this.nullHandler('mail','mail')}>bleum.music@gmail.com</a></p>
        </div>
      </div>
    )
  }
}

export default App
