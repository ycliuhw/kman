import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Provider } from 'react-redux';
import Store from './store';

import logo from './logo.svg';
import './App.css';
import MainSection from './views/MainSection';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col xs={3}><img src={logo} className="App-logo" alt="logo" /></Col>
            <Col xs={6} mdPull={2}><h2>An Awesome App</h2></Col>
          </Row>
          <Row>
            <Provider store={Store}>
              <MainSection />
            </Provider>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
