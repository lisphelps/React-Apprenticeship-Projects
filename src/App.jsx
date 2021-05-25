/* eslint-disable no-console */
import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Shop from './components/Shop/Shop';
import { AuthContext, AuthContextProvider } from './components/api/AuthContext';

function App() {
  const { isValidated, setValidated } = useContext(AuthContext);

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            { isValidated
              ? <Login setValidated={setValidated} />
              : <Main /> }
          </Route>
          <Route path="/main" component={Main} />
          <Route path="/shop" component={Shop} />
          <Route path="/logout" component={Login} />
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
