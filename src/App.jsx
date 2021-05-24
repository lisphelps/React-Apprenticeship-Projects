import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Main from './components/Main/Main';

function App() {
  const [validated, setValidated] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <Login />
        </Route>
      </BrowserRouter>

      {(validated)
        ? <Main />
        : <Login setValidated={setValidated} />}
    </div>
  );
}

export default App;
