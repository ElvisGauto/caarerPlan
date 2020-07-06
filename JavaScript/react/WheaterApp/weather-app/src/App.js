import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';

import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Ciudad de Mexico,mx',
  'Bogota,col',
  'Santiago de Chile,cl',
  'Londres,eng'
];

class App extends Component {

  constructor() {
    super();
    this.state = { city: 'Nueva Ciudad' };
  }

  handleSelectionLocation = city => {
    this.setState({
      city
    });
  }
  
  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar>
            <Toolbar position="sticky">
              <Typography
              variant="title"
              color="inherit"
              >Weather App</Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <div className="App">
              <LocationList cities={cities}
              onSelectedLocation={this.handleSelectionLocation}></LocationList>
            </div>
          </Col>
          <Col XS={12} md={6}>
            <Paper zDepth={4}>
              <div className="details">
                <ForecastExtended city={city}></ForecastExtended>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
