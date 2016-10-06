import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router'
const App = ({ children }) => (
  <div className="what-is-this-class">
    <div className="logo-container group">
      <Link to="/"><img
        src={window.twitterAssets.firstImage}
        className="logo"></img></Link><GreetingContainer />
    </div>
    {children}
  </div>
);

export default App;
