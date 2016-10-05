import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <div className="logo-container"><h1>Medium Cup Of Joe App logo here</h1></div>
    <GreetingContainer />
    {children}
  </div>
);

export default App;
