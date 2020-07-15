import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';

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
    this.state = { city: null };
  }

  handleSelectionLocation = city => {
    this.setState({
      city
    });
    this.props.setCity(city);
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
                {city ? <ForecastExtended city={city}></ForecastExtended> : 
                <h4 className="title">No se seleccionó Ciudad </h4>}
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

App.propTypes = {
  setCity: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => (  
  {
    setCity: value => dispatch(setCity(value))
  }
);

export default connect(null, mapDispatchToProps)(App)
