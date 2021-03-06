import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';

class App extends Component {

  renderHome = () => <h1>Home</h1>;
  
  renderCustomerContainer = () => <h1>Customer Container</h1>;
  
  renderCustomerListContainer = () => <CustomersContainer />;
  
  renderCustomerNewContainer = () => <h1>Customer New Container</h1>;

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/customers" component={this.renderCustomerListContainer} />
          <Switch>
            <Route path="/customers/new" component={this.renderCustomerNewContainer} />
            <Route path="/customers/:dni" component={this.renderCustomerContainer} />
          </Switch>
          {/* <Switch>
            <Route path="/customers/new" component={this.renderCustomerNewContainer} />
            <Route path="/customers/:dni" component={this.renderCustomerContainer} />
            <Route path="/customers" component={this.renderCustomerListContainer} />
            <Route path="/" component={this.renderHome} />
          </Switch> */}
        </div>
      </Router>
    );
  }
}

export default App;
