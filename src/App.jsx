import React, { useState } from 'react';
import Login from './components/Login/Login';
import Main from './components/Main/Main';

function App() {
//  const [validated, setValidated] = useState(false);
  const [test, setTest] = useState(false);

  return (
    <div className="App">
      {(test)
        ? <Main />
        : <Login setTest={setTest} />}

    </div>
  );
}

export default App;
