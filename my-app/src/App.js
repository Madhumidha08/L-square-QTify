import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar.jsx";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar />
        <a
          className="App-link"
          href="https://reactjs.org"
                 >
                 </a>
      </header>
    </div>
  );
}

export default App;
