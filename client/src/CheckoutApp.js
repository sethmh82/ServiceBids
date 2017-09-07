import React, { Component } from 'react';
import logo from './logo.svg';
import Checkout from './Checkout';
import './App.css';

class CheckoutApp extends Component {
  render() {
    return (
      <div className="CheckoutApp">
        <p className="App-intro">
          <Checkout
            name={'Make Payment'}
            description={'...'}
            amount={1}
          />
        </p>
      </div>
    );
  }
}

export default CheckoutApp;

<CheckoutApp />