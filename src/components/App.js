import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';

const App = () => {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Header />
        <Switch >
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
