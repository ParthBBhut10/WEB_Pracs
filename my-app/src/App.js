import logo from './logo.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to Mapple </h1>
        <p> We are here to help you to sell or rent your goods.</p>
        <a href="https://www.apple.com"> Click Here </a>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
