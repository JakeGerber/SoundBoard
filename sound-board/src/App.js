import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import FileUpload from './components/FileUpload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button name="/Sweden.mp3" />
        <Button name="/gangnam.mp3" />
        <h1>okay now the new stuff</h1>
        <FileUpload />
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
