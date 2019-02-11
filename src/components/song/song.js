import React from 'react'
import './song.css'

class Song extends React.Component {
  playHandler = () => {
    var aud = document.getElementsByClassName('audio')[0]
    var playB = document.getElementsByClassName('play-pause')[0]
    var progress = document.getElementsByClassName('progress')[0]

    if (aud.paused) {
      aud.play()
      playB.removeClass('icon-play')
      playB.addClass('icon-stop')
    }
    else {
      aud.pause()
      playB.removeClass('icon-stop')
      playB.addClass('icon-play')
    }
    aud.ontimeupdate = () => {
      progress.css('width', aud.currentTime / aud.duration * 100 + '%')
    }
  }

  render () {
    return (
      <React.Fragment>
        <audio src={this.props.song}>browser doesn't support audio</audio>
        <div class='player'>
          <img src={this.props.graphic} />
          <div class='info'>
            <div class='name'>{this.props.title}</div>
          </div>
          <div class='btns'>
            <div class='iconfont play-pause icon-play' onClick={playHander}/>
          </div>
          <div class='progress' />
        </div>
      </React.Fragment>
    )
  }
}

export default Song
