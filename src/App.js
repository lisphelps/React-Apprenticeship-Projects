import './App.css';
import Form from './components/Form/Form'
import Left from './components/Left/Left'

function App() {
  return (
    <div className="App">
      <Left />
      <div className="right">
        <div className="tryit">
          <p><strong>Try it free for 7 days</strong> then $20/mo. thereafer</p>
        </div><br />
        <Form />
      </div>
    </div>
  );
}

export default App;
