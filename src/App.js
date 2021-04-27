import './App.css';
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <div ClassName="left">
        <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
      <div ClassName="right">
        <div ClassName="tryit">
          <p><em>Try it free for 7 days</em> then $20/mo. thereafer</p>
        </div>
        <div ClassName="formcontainer">
        <Form />
        <span ClassName="disclaimer">By clicking the button, you are agreeing to our <a href="index.html">Terms and Services</a></span>
        </div>
      </div>
    </div>
  );
}

export default App;
