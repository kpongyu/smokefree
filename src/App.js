import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './appshell/AppHeader/AppHeader.js';
import AppFooter from './appshell/AppFooter/AppFooter.js';
import {Grid, Row, Col} from 'react-bootstrap/lib';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <AppHeader/>
        <Grid>
          <Row>
            <Col xs={12} className="content">
            
            
            </Col>
          </Row>
        </Grid>
        <AppFooter/>
      </div>
     
    );
  }
}

export default App;
