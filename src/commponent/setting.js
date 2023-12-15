
import React from 'react';

const Settings = () => {
  return (
    <div className="settings-container">
      <h1 className='sett'>Settings Page</h1>
      <p>This is the Settings page. Customize your preferences here.</p>

      <ul>
        <li>
          <strong>Notification Settings:</strong> Configure your notification preferences.
        </li>
        <li>
          <strong>Profile Settings:</strong> Update your profile information.
        </li>
        <li>
          <strong>Security Settings:</strong> Enhance the security of your account.
        </li>
        <li>
          <strong>Theme Settings:</strong> Choose a theme for the application.
        </li>
      </ul>


      <div className="explore-message">
        <p>
          Explore the Settings page to customize your experience and make the most out of the application.
        </p>
      </div>
    </div>
  );
};

export default Settings;
