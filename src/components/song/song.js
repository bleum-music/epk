import React from 'react'
import './song.css'
import play from './play.png'
import pause from './pause.png'

class Song extends React.Component {
  state = {
    src: play
  }

  playHandler = progressClass => () => {
    var aud = document.getElementById(this.props.id)
    // var playB = document.getElementsByClassName('play-pause')[Number(this.props.index)]
    if (progressClass === 'black') {
      var progress = document.getElementsByClassName(progressClass)[Number(this.props.index)]
    } else {
      progress = document.getElementsByClassName(progressClass)[0]
    }

    if (aud.paused) {
      aud.play()
      this.setState({src: pause})
    }
    else {
      aud.pause()
      this.setState({src: play})
    }
    aud.ontimeupdate = () => {
      progress.style.width = `${aud.currentTime / aud.duration * 100}%`
    }
  }

  render () {
    const progressClass = (this.props.index < 2)? 'black':'white'

    var animateLogo = () => {
      var target
      var banner
      var svg
      var logoPink
      var logoWhite
      var logoBlue
      var bio
      const init = () => {
        target = document.getElementById('logo')
        banner = document.getElementById('banner')
        logoPink = document.getElementById('logoPink')
        logoWhite = document.getElementById('logoWhite')
        logoBlue = document.getElementById('logoBlue')
        svg = document.getElementById('svg')
        bio = Array.from(document.querySelectorAll('.bio'))
        addEventHandlers()
        checkPosition()
      }
      const addEventHandlers = () => {
        window.addEventListener('scroll', checkPosition)
        window.addEventListener('resize', init)
      }
      const checkPosition = () => {
        var distanceFromTop = banner.getBoundingClientRect().top
        if (distanceFromTop < 0) {
          target.className = target.className.replace(
            'hidden',
            'logo'
          )
          logoPink.classList.add('logoPink')
          logoWhite.classList.add('logoWhite')
          logoBlue.classList.add('logoBlue')
          bio.forEach(p => {
            p.classList.add('bioAnimate')
            p.classList.remove('hidden')
          })
          svg.style.opacity = '0'
          svg.style.height = '0'
        } 
        else {
          target.className = target.className.replace(
            'logo',
            'hidden'
          )
          logoPink.classList.remove('logoPink')
          logoWhite.classList.remove('logoWhite')
          logoBlue.classList.remove('logoBlue')
          bio.forEach(p => {
            p.classList.add('hidden')
            p.classList.remove('bioAnimate')
          })
          svg.style.opacity = '1'
          svg.style.height = '100%'
        }
      }
      return {
        init: init
      }
    }
    const mounted = document.getElementById('banner')
    if(mounted !== null) {
      animateLogo().init()
    }

    return (
      <React.Fragment>
        <audio id={this.props.id} src={this.props.song}>browser doesn't support audio</audio>
        <div className='songContainer' onClick={this.playHandler(progressClass)} >
          <img src={this.props.graphic} alt={this.props.title}/>
          <div className='player'>
            {/* <div className='info'>
              <div className='singer'>{this.props.title}</div>
            </div> */}
            <div className='btns'>
              <img className='play-pause' src={this.state.src} alt='play or pause'/>
            </div>
          </div>
          <div className={progressClass} />
        </div>
      </React.Fragment>
    )
  }
}

export default Song
