import React, { Component } from 'react';
import './AppFooter.css';
import 'react-bootstrap/dist/react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap/lib';

const FooterImg = require('../../assets/footer.png');




class AppFooter extends Component {
    render() {
      return (
        <footer>
        <Grid>
         
        <Row className="show-grid">
          <Col xs={12}>
            <img src={FooterImg} className="img-responsive" alt=""/>
         
          </Col>
        </Row>
       
      </Grid>
      </footer>
      )
    }
  }
  
  export default AppFooter;