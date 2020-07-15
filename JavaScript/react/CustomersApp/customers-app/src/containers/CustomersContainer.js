import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersList from './../components/CustomerList';
import CustomerActions from '../components/CustomerActions';

const customers = [
    {
        "dni": "123456789",
        "name": "Pancho Villa",
        "age": 10
    },
    {
        "dni": "987654321",
        "name": "Villa Pancho",
        "age": 100
    },
    {
        "dni": "321654987",
        "name": "Vipa Llancho",
        "age": 1000
    }
];

class CustomersContainer extends Component {

    renderBody = customers => (
        <div>
            <CustomersList 
            customers={customers} urlPath={'/customers'} >
            </CustomersList>
            <CustomerActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomerActions>
        </div>
    );

    render() {
        return (
            <div>
                <AppFrame header={'Listado de clientes'}
                body={this.renderBody(customers)}>
    
                </AppFrame>
            </div>
        );
    }
};

CustomersContainer.propTypes = {
    
};

export default CustomersContainer;