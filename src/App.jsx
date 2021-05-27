import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthContextProvider } from './components/api/Authentication';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Shop from './components/Shop/Shop';
import PrivateRoute from './components/api/PrivateRoute';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Main} />
          <PrivateRoute path="/testimonials" component={Main} />
          <PrivateRoute path="/shop" component={Shop} />
          <Route path="/logout" component={Login} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
