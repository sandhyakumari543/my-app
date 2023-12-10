import React, { useState } from 'react';
import TollCalculator from './commponent/cal';
import TollTax from './commponent/TollTax';
import Settings from './commponent/setting';
import './App.css'

function App() {
  const [showCalculator, setShowCalculator] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showTollTax, setShowTollTax] = useState(true);

  const openCalculator = () => {
    setShowCalculator(true);
    setShowSettings(false);
    setShowTollTax(false);
  };

  const openTollTax = () => {
    setShowCalculator(false);
    setShowSettings(false);
    setShowTollTax(true);
  };

  const openSettings = () => {
    setShowCalculator(false);
    setShowSettings(true);
    setShowTollTax(false);
  };

  return (
    <div className="App">
      <nav id='sidebar'>
        <p>Sandhya</p>
        <p id='profile'>sandhya11@.com</p>
        <a href="#" onClick={openCalculator}>
          {showCalculator ? 'Calculator' : 'Calculator'}
        </a>
        <a href="#" onClick={openTollTax}>
          {showTollTax ? 'Toll Tax' : 'Toll Tax'}
        </a>
        <a href="#" onClick={openSettings}>
          {showSettings ? 'Settings' : 'Settings'}
        </a>
      </nav>

      <div id='content'>
        {showCalculator ? <TollCalculator /> : null}
        {showSettings ? <Settings /> : null}
        {showTollTax ? <TollTax /> : null}
      </div>
    </div>
  );
}

export default App;