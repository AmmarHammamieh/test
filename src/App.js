import logo from './logo.svg';
import './App.css';
import Helmet from 'react-helmet';

function App() {
  return (
    
    <div className="App">
      <Helmet>
        <title>test | Lumytic</title>
        <meta name="description" content={"test desc"} />
        <meta name="title" content={"test | Lumytic"} />
        <meta property="og:title" content={"test | Lumytic"} />
        <meta property="og:description" content={"test desc"} />
        <meta property="og:image" content={"/logo192.png"} />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
