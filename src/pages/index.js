import React from 'react'
import '../components/layout.css'
import Social from '../components/social/social'
import portrait from '../images/good_0.jpg'
import light_portrait from '../images/light_0.jpg'
import daniel from '../images/good_2.jpg'
import light_daniel from '../images/light_2.jpg'
import brittany from '../images/good_3.jpg'
import light_brittany from '../images/light_3.jpg'
import logo from '../components/logo.png'

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
    let isLoaded = this.state.isLoaded ? "ready" : "placeHolder"

    let logoPlaceHolder = <div className="logo">bleum</div>
    if(this.state.logoLoaded){logoPlaceHolder = <img className="logo" src={logo} alt="brand logo"/>}

    const aboutUs = 
    this.state.loadFirst ? portrait : light_portrait
    const music = 
    this.state.loadSecond ? daniel : light_daniel
    const contact = 
    this.state.loadThird ? brittany : light_brittany

    return (
      <div className='App'>
        <div id='aboutus' className={isLoaded}>
          <div id="banner">
            {logoPlaceHolder}
            <img src={aboutUs} alt='brittany and daniel sitting together' />
          </div>
          <p>Bleum is an electronic music duo consisting of producer Daniel James
          and singer/songwriter Brittany McQuinn. They began working together in
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
          <div>music</div>
          <img src={music} alt='daniel' />
          <Social />
        </div>
        <div id='contact'>
          <div className='spacer' />
          <div>contact</div>
          <img src={contact} alt='brittany' />
          <p><a href="mailto:bleum.music@gmail.com" target="_top">bleum.music@gmail.com</a></p>
        </div>
      </div>
    )
  }
}

export default App
