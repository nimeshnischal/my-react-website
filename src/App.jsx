import React from 'react';
import './App.css';
import { useTheme } from './Components/Theme/ThemeContext';
import ThemeToggler from './Components/Theme/ThemeToggler';
import NavBar from './Components/NavBar/NavBar';

const AppStyle = (background) => ({
  background,
  height: '100vh',
  width: '100vw',
});


function App() {
  const { theme: { primaryBackground } } = useTheme();
  return (
      <div className="App" style={AppStyle(primaryBackground)}>
        <NavBar/>
        <ThemeToggler/>
      </div>
  );
}

export default App;
