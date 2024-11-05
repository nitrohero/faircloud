import React from "react";
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className="flex h-full overflow-hidden">
      <div className="flex-shrink-0">
        <Nav />
      </div>
      <div className="flex-grow overflow-auto">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;