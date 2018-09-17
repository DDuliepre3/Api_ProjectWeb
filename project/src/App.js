import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopBar from './components/constant/header';
import BottomBar from './components/constant/footer';
import Homepage from './components/home';
import Products from './components/products';
import Contact from './components/contact';
import ErrorPath from './components/error';

import './assets/css/app.css';

class App extends Component {
  render() {
    return (
      <div>

        <BrowserRouter>
          <div>
            <TopBar />

            <Switch>
              <Route path="/" component={Homepage} exact />
              <Route path="/products" component={Products} />
              <Route path="/contact" component={Contact} />

              <Route component={ErrorPath} />
            </Switch>

            <BottomBar />
          </div>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;