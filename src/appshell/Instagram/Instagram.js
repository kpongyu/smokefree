import React, { Component } from 'react';
import './Instagram.css';
import 'react-bootstrap/dist/react-bootstrap';

const SectionImage = require('../../assets/instagram.png');

class Instagram extends Component {
    render() {
      return (
        <div>
            <img src={SectionImage} className="img-responsive" alt=""/>
        </div>
       
      )
    }
  }
  
  export default Instagram;