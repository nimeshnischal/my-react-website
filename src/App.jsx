import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTheme } from './Components/Theme/ThemeContext';
import ThemeToggler from './Components/Theme/ThemeToggler';

function App() {
  const { theme } = useTheme();
  const { primary, background } = theme;

  return (
      <div className="App">
        <header className="App-header" style={{ color: primary, backgroundColor: background }} >
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
          <ThemeToggler/>
        </header>
      </div>
  );
}

export default App;
