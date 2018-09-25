import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './appshell/AppHeader/AppHeader.js';
import AppFooter from './appshell/AppFooter/AppFooter.js';
import LearnAbout from './appshell/LearnAbout/LearnAbout.js';
import TryAnApp from './appshell/TryAnApp/TryAnApp.js';
import SmokefreeTXT from './appshell/SmokefreeTXT/SmokefreeTXT.js';
import TipsStress from './appshell/TipsStress/TipsStress.js';
import Instagram from './appshell/Instagram/Instagram.js';
import {Grid, Row, Col} from 'react-bootstrap/lib';
import StrongEnough from './appshell/StrongEnough/StrongEnough';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <AppHeader/>
        <Grid className="content">
          <Row>
            <Col xs={12} md={4} className="sectionCard">
            <LearnAbout/>
            </Col>
            <Col xs={12} md={8} className="sectionCard">
            <TryAnApp/>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={8} className="sectionCard">
            <SmokefreeTXT/>
            </Col>
            <Col xs={12} md={4} className="sectionCard">
            <TipsStress/>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={4} className="sectionCard">
            <Instagram/>
            </Col>
            <Col xs={12} md={8} className="sectionCard">
            <StrongEnough/>
            </Col>
          </Row>
        </Grid>
        <AppFooter/>
      </div>
     
    );
  }
}

export default App;
