import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <div className="logo-container">
      <p>Pic</p><GreetingContainer />
    </div>
    {children}
  </div>
);

export default App;
