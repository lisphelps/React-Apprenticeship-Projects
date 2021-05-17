import React, { useState } from 'react';
import Login from './components/Login/Login';
import Main from './components/Main/Main';

function App() {
  const [validated, setValidated] = useState(false);

  return (
    <div>
      {(validated)
        ? <Main />
        : <Login setValidated={setValidated} />}
    </div>
  );
}

export default App;
