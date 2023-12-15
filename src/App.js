import React, { useState } from 'react';
import TollCalculator from './commponent/cal';
import TollTax from './commponent/TollTax';
import Settings from './commponent/setting';
import UserProfile from './commponent/profile';
import './App.css'

function App() {
  const [showCalculator, setShowCalculator] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showTollTax, setShowTollTax] = useState(true);
  const [showUserProfile, setShowUserProfile] = useState(true);

  const openCalculator = () => {
    setShowCalculator(true);
    setShowSettings(false);
    setShowTollTax(false);
    setShowUserProfile(false);
  };

  const openTollTax = () => {
    setShowCalculator(false);
    setShowSettings(false);
    setShowTollTax(true);
    setShowUserProfile(false);
  };

  const openSettings = () => {
    setShowCalculator(false);
    setShowSettings(true);
    setShowTollTax(false);
    setShowUserProfile(false);
  };
  
  const openUserProfile = () => {
    setShowCalculator(false);
    setShowSettings(false);
    setShowTollTax(false);
    setShowUserProfile(true);
  };
   
  return (
    <div className="App">
      <nav id='sidebar'>
        <a href="#" onClick={openTollTax}>
          {showTollTax ? 'Toll Tax' : 'Toll Tax'}
        </a>
        <a href="#" onClick={openCalculator}>
          {showCalculator ? 'TOLL Calculator' : 'TOLL Calculator'}
        </a>
        <a href="#" onClick={openSettings}>
          {showSettings ? 'Settings' : 'Settings'}
        </a>
        <a href="#" onClick={openUserProfile}>
        {showUserProfile ? 'User Profile' : 'User Profile'}
        </a>
      </nav>

      <div id='content'>
        {showTollTax ? <TollTax /> : null}
        {showCalculator ? <TollCalculator /> : null}
        {showSettings ? <Settings /> : null}
        {showUserProfile && <UserProfile />}
      </div>
    </div>
  );
}

export default App;