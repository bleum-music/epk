import React from 'react'
import './imageLoader.css'
import lt1 from './light_1.jpg'
import lt2 from './light_2.jpg'
import lt3 from './light_3.jpg'
import lt4 from './light_4.jpg'
import lt5 from './light_5.jpg'
import lt6 from './light_6.jpg'
import l1 from './loader_1.jpg'
import l2 from './loader_2.jpg'
import l3 from './loader_3.jpg'
import l4 from './loader_4.jpg'
import l5 from './loader_5.jpg'
import l6 from './loader_6.jpg'

class ImageLoader extends React.Component {
  state = {
    photos: [lt1, lt2, lt3, lt4, lt5, lt6],
    jpg: [l2, l1, l3, l4, l5, l6]
  }
  
  componentDidMount(){
    const jpg = this.state.jpg
    let photos = this.state.photos
    let i = 0
    jpg.forEach(jpeg => {
        const img = new Image()
        img.src = jpeg
        img.onload = () => {
            photos[i] = jpeg
            this.setState({ photos })
            i++
        }
      }
    )
    this.carousel()
  }
  
  carousel = () => {
    setInterval(() => {
      const photos = this.state.photos
      const jpg = this.state.jpg
      const first = jpg[0]
      photos.splice(0,1)
      jpg.splice(0,1)
      photos.push(first)
      jpg.push(first)
      this.setState({ photos, jpg })
    }, 2000)
  }
      
  render(){
    return (
      <React.Fragment>
        <a id="home" href="#">
          <div id="landing">
            <img id="leftPicture" src={this.state.photos[0]} alt="gallery left" />
            <img id="mainPicture" className="leftBlurr rightBlurr" src={this.state.photos[1]} alt="gallery center" />
            <img id="rightPicture" src={this.state.photos[2]} alt="gallery right" />
          </div>
        </a>
      </React.Fragment>
    )}
  }
  
  export default ImageLoader