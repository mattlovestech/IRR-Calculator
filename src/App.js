import logo from './logo.svg';
import './App.css';
import Card from '@mui/material/Card';
function App() {
  return (
    <Card className="App" width={500}>
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
    </Card>
  );
}

export default App;
