import './App.css';

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
        <form>
        <input id="first"></input>
        <input id="last"></input>
        <input id="email"></input>
        <input id="password"></input>
        <submit><button>CLAIM YOUR FREE TRIAL</button></submit>
        </form>
        <span ClassName="disclaimer">By clicking the button, you are agreeing to our <a href="index.html">Terms and Services</a></span>
        </div>
      </div>
    </div>
  );
}

export default App;
