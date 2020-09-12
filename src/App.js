import React from 'react';
import logo from './logo.svg';
import HomeContainer from './container/HomeContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <HomeContainer />
      <div className="add-to-cart">
        <img src="data:image/png;base64,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" />
      </div>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
            <img src="https://images-na.ssl-images-amazon.com/images/I/61d-phh4GfL._SL1500_.jpg" />
        </div>
        <div className="text-wrapper item">
            <span>
              Samsung:
            </span>
            <span>15000</span>
        </div>
        <div className="btn-wrapper item">
            <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
