import React, { Component } from 'react';
import './LearnAbout.css';
import 'react-bootstrap/dist/react-bootstrap';

const SectionImage = require('../../assets/learn-about.png');

class LearnAbout extends Component {
    render() {
      return (
         <div>
            <img src={SectionImage} className="img-responsive" alt=""/>
        </div>
       
      )
    }
  }
  
  export default LearnAbout;