import React, { Component } from 'react'
import './layout.css'
import logo from './logo.png'

class Layout extends Component {
state = {
    logoLoaded: false
}

componentDidMount(){
    const img = new Image()
    img.src = logo
    img.onload = () => {this.setState({logoLoaded: true})}
}

toggleHandler = () => {
    const navhtml = document.getElementsByClassName("mobile")
    const navArr = Array.from(navhtml)
    navArr.forEach(element => element.classList.toggle("hideThis"))
}
    
render(){
    let logoPlaceHolder = "bleum"
    if(this.state.logoLoaded){logoPlaceHolder = <img src={logo} alt="brand logo"/>}

    return (
        <nav>
            <div id="hamburger" onClick={this.toggleHandler}>
                <hr />
                <hr />
                <hr />
            </div>
            <a href="#home" id="band" onClick={this.toggleHandler}>{logoPlaceHolder}</a>
            <a href="#aboutus" className="heading mobile hideThis" onClick={this.toggleHandler}>about us</a>
            {/* <a href="#shows" className="heading mobile hideThis" onClick={this.toggleHandler}>shows</a> */}
            <a href="#music" className="heading mobile hideThis" onClick={this.toggleHandler}>music</a>
            <a href="#contact" className="heading mobile hideThis" onClick={this.toggleHandler}>contact</a>
        </nav>
        )
    }
}

export default Layout