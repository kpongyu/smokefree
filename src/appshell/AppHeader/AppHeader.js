import React, { Component } from 'react';
import './AppHeader.css';
import 'react-bootstrap/dist/react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap/lib';

const HeroImg = require('../../assets/header.png');




class AppHeader extends Component {
    render() {
      return (
        <header>
        <Grid>
         
        <Row className="show-grid">
          <Col xs={12}>
            <img src={HeroImg} className="img-responsive" alt=""/>
         
          </Col>
        </Row>
       
      </Grid>
      </header>
      )
    }
  }
  
  export default AppHeader;