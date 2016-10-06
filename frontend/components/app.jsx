import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <div className="logo-container group">
      <img
        src={window.twitterAssets.firstImage}
        className="bad-tweet"></img><GreetingContainer />
    </div>
    {children}
  </div>
);

export default App;
