/* eslint-disable no-console */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
