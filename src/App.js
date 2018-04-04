import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';


const particlesOptions = {
                particles: {
                    number: {
                      value:130,
                      density:{
                      enable: true,
                      value_area: 800,
                      color: "#3CA9D1",
                      blur: 5
                    }
                 } 
                }
              }

class App extends Component {
  render() {
    return (

      <div className= 'App'>
      <Particles className='particles'
      params={particlesOptions}/>
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>  
      </div>
   
        );
  }
}

export default App;
