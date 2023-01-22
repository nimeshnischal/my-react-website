import React, { useContext } from 'react';
import { MantineProvider } from '@mantine/core';
import logo from './logo.svg';
import './App.css';
import { ThemeColorContext } from './ThemeContext';
import ThemeToggler from './ThemeToggler';
import NavHeader from './Components/NavHeader';

const links = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Contact', link: '/contact' },
];

function App() {
  const theme = useContext(ThemeColorContext);
  const { primary, secondary } = theme.state;

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NavHeader links={links}/>
      <div className="App">
        <header className="App-header" style={{ color: primary, backgroundColor: secondary }} >
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
    </MantineProvider>
  );
}

export default App;
