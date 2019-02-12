import React from 'react'
import './song.css'
import play from './play.png'
import pause from './pause.png'

class Song extends React.Component {
  state = {
    src: play
  }

  playHandler = () => {
    var aud = document.getElementById(this.props.id)
    // var playB = document.getElementsByClassName('play-pause')[Number(this.props.index)]
    var progress = document.getElementsByClassName('progress')[Number(this.props.index)]

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
    return (
      <React.Fragment>
        <audio id={this.props.id} src={this.props.song}>browser doesn't support audio</audio>
        <div className='songContainer' onClick={this.playHandler} >
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
