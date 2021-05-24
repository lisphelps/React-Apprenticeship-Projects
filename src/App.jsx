import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Shop from './components/Shop/Shop';

function App() {
//  const [validated, setValidated] = useState(false);

  return (
    <BrowserRouter>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/main">
        <Main />
      </Route>
      <Route path="/shop">
        <Shop />
      </Route>
    </BrowserRouter>
  );
}

export default App;
