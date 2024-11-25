import logo from './logo.svg';
import './App.css';
import Helmet from 'react-helmet';

function App() {
  return (
    
    <div className="App">
      <Helmet>
        <title>Test2 | Lumytic</title>
        <meta name="description" content="Test desc" />
        <meta name="title" content="Test | Lumytic" />
        <meta property="og:title" content="Test | Lumytic" />
        <meta property="og:description" content="Test desc" />
        <meta property="og:image" content="https://lumytic.com/d1665b83e85f05ae4c9b.webp" />
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
